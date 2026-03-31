export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Wait for page to load completely
    if (document.readyState === 'complete') {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      // Track key metrics
      const metrics = {
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
        firstPaint: performance.getEntriesByType('paint')[0]?.startTime,
        redirect: perfData.redirectEnd - perfData.redirectStart,
        dnsLookup: perfData.domainLookupEnd - perfData.domainLookupStart,
        tcpConnection: perfData.connectEnd - perfData.connectStart,
        requestResponse: perfData.responseEnd - perfData.requestStart,
      };
      
      // Log to console (in production, send to analytics service)
      console.log('Performance metrics:', metrics);
      
      // Optionally, store in localStorage for later retrieval
      // localStorage.setItem('performanceMetrics', JSON.stringify(metrics));
    } else {
      // If not loaded yet, wait and try again
      setTimeout(trackPerformance, 50);
    }
  }
};

// Auto-invoke when module is imported in a browser environment
if (typeof window !== 'undefined') {
  trackPerformance();
}