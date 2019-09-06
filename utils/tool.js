import Uri from 'urijs';

const curUrl = window.location.href;

export function getRealUrl(page, params = {a:12, b: 2}) {
  let url = new Uri(curUrl);

  url.filename(`${page}.html`);
  if (params) {
    url.query(params); 
  }

  console.log(url.href());
  window.location.href = url.href();
}