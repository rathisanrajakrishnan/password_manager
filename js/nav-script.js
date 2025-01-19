// const nav = `
//     <nav>
//       <a href="index-no-html.html">Text-only</a>
//       <a href="index-html.html">HTML-only</a>
//       <a href="index-html-css.html">HTML &amp; CSS</a>
//     </nav>
// `;

const links = [
  { 'label' : 'Home',
    'href' : '/index.html'
  },
  { 'label' : 'Text-only',
    'href' : '/versions/text-only.html'
  },
  { 'label' : 'HTML-only',
    'href' : '/versions/html-only.html'
  },
  { 'label' : 'HTML & CSS',
    'href' : '/versions/html-css.html'
  }
]

document.addEventListener('DOMContentLoaded', (event) => {
  let body = document.querySelector('body');

  let nav = document.createElement('nav');
  let ul = document.createElement('ul');
  
  for (const link of links) {
    let anchor = document.createElement('a');
    anchor.setAttribute('href', link.href);
    anchor.innerText = link.label;
    let li = document.createElement('li');
    li.append(anchor);
    ul.append(li);
  }
  
  nav.append(ul);
  nav.setAttribute('class', 'helper-nav');
  
  body.prepend(nav);
});