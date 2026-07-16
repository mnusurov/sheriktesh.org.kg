export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.hostname === 'sheriktesh.org.kg') {
      url.hostname = 'www.sheriktesh.org.kg';
      if (url.pathname === '/') url.pathname = '/ru';
      return Response.redirect(url.toString(), 301);
    }
    return fetch(request);
  },
};
