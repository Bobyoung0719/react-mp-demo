import URI from 'urijs';

const curUrl = window.location.href;

export function getRealUrl(page, params) {
  let url = new URI(curUrl);

  url.filename(`${page}.html`);
  if (params) {
    url.query(params); 
  }

  console.log(url.href());
  window.location.href = url.href();
}