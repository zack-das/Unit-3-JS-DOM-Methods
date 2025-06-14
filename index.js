document.querySelector("body").innerHTML = "<h1>My HTML adventure</h1>";
document.querySelector("body").innerHTML += `<p>
  We're writing HTML markup to display in our <strong>browser</strong>. We're
  basically telling computers what to do. <em>Neat!</em>;
</p>`;
document.querySelector("p").innerHTML += `We're writing
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> markup to
display in our <strong>browser</strong>.`;
document.querySelector("body").innerHTML += `<table>`;
document.querySelector("table").innerHTML += `
  <thead>
    <tr>
      <th>Element name</th>
      <th>Display value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>h1</td>
      <td>block</td>
    </tr>
    <tr>
      <td>p</td>
      <td>block</td>
    </tr>
    <tr>
      <td>strong</td>
      <td>inline</td>
    </tr>
    <tr>
      <td>em</td>
      <td>inline</td>
    </tr>
  </tbody>
`;