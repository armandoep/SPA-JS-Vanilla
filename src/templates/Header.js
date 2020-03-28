const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/SPA-JS-Vanilla/">
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3ARick_and_Morty.svg&psig=AOvVaw2wnNC8gkyArrQcNyeMDiC9&ust=1585518069834000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiXuZuRvugCFQAAAAAdAAAAABAH' class='rick-logo'>
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </div>
  `;
  return view;
};

export default Header;
