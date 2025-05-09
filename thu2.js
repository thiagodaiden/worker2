export default {
  async fetch(request, env, ctx) {
    const country = request.cf?.country || 'XX'
    const url = new URL(request.url)

    if (country === 'ID') {
      url.hostname = 'google.com'  // ← thay domain phụ tại đây
      return fetch(url.toString(), request)
    }

    return fetch(request)
  }
}
