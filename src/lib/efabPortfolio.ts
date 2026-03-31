import { estatePortfolioItems } from '../data/siteContent';

const EFAB_WP_API = 'https://efabproperties.com/web/wp-json/wp/v2';

interface RenderedField {
  rendered: string;
}

interface WpFeaturedMedia {
  source_url?: string;
}

interface WpPortfolioPost {
  id: number;
  slug: string;
  link: string;
  title: RenderedField;
  excerpt: RenderedField;
  content: RenderedField;
  _embedded?: {
    'wp:featuredmedia'?: WpFeaturedMedia[];
  };
}

export interface EstateDetail {
  id: number;
  slug: string;
  title: string;
  summary: string;
  location: string;
  heroImage: string;
  galleryImages: string[];
  sourceUrl: string;
  html: string;
}

function decodeHtml(value: string) {
  const doc = new DOMParser().parseFromString(value, 'text/html');
  return doc.documentElement.textContent?.replace(/\s+/g, ' ').trim() ?? '';
}

function cleanPortfolioHtml(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html');

  doc.querySelectorAll('script, style, noscript').forEach((node) => node.remove());

  doc.querySelectorAll<HTMLElement>('[style]').forEach((element) => {
    element.removeAttribute('style');
  });

  doc.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
    const href = link.getAttribute('href') ?? '';

    if (href.startsWith('http')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noreferrer');
    }
  });

  doc.querySelectorAll<HTMLImageElement>('img').forEach((image) => {
    image.loading = 'lazy';
    image.decoding = 'async';
    image.removeAttribute('srcset');
    image.removeAttribute('sizes');
  });

  doc.querySelectorAll<HTMLElement>('p, div, section').forEach((element) => {
    const hasRichChildren = element.querySelector('img, iframe, table, ul, ol, h1, h2, h3, h4, h5, h6');
    const text = element.textContent?.replace(/\s+/g, ' ').trim() ?? '';

    if (!hasRichChildren && text.length === 0) {
      element.remove();
    }
  });

  return doc.body.innerHTML;
}

function extractGalleryImages(heroImage: string, html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const collected = new Set<string>(heroImage ? [heroImage] : []);

  doc.querySelectorAll<HTMLImageElement>('img').forEach((image) => {
    const src = image.getAttribute('src');

    if (src) {
      collected.add(src);
    }
  });

  return Array.from(collected);
}

export async function fetchEstateDetailBySlug(slug: string): Promise<EstateDetail | null> {
  const response = await fetch(`${EFAB_WP_API}/portfolio?slug=${encodeURIComponent(slug)}&_embed`, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch estate detail for ${slug}`);
  }

  const posts = (await response.json()) as WpPortfolioPost[];
  const post = posts[0];

  if (!post) {
    return null;
  }

  const fallback = estatePortfolioItems.find((item) => item.id === slug);
  const title = decodeHtml(post.title.rendered);
  const summary = decodeHtml(post.excerpt.rendered) || fallback?.summary || '';
  const heroImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? fallback?.image ?? '';
  const html = cleanPortfolioHtml(post.content.rendered);

  return {
    id: post.id,
    slug: post.slug,
    title,
    summary,
    location: fallback?.location ?? '',
    heroImage,
    galleryImages: extractGalleryImages(heroImage, html),
    sourceUrl: post.link,
    html,
  };
}
