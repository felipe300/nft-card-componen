# NFT Card Component html and css

## HTML
```html
<body>
  <div class="container">
    <div class="wrapper">
      <div class="img-top">
        <img src="/images/image-equilibrium.jpg" alt="image equilibrium">
        <div class="img-overlay">
          <img src="/images/icon-view.svg" alt="icon view">
        </div>
      </div>
      <div class="box-text">
        <a href="/">Equilibrium #3429</a>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div class="flex">
          <div class="eths">
            <img src="/images/icon-ethereum.svg" alt="etherium image">
            <p>0.041 ETH</p>
          </div>
          <div class="days">
            <img src="/images/icon-clock.svg" alt="clock image">
            <p>3 days left</p>
          </div>
        </div>
        <div class="author">
          <img src="/images/image-avatar.png" alt="avatar image">
          <p>Creation of <a href="#">Jules Wyvern</a></p>
        </div>
      </div>
    </div>
  </div>
</body>
```

## CSS
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Outfit', sans-serif;
  background: hsl(217, 54%, 11%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  max-width: 350px;
  margin: 0 auto;
}

.wrapper {
  margin: 2rem 1rem;
  padding: 20px;
  background: hsl(216, 50%, 16%);
  border-radius: 10px;
  box-shadow: 0px 0px 30px 5px hsla(0, 0%, 0%, 0.75);
}

.img-top {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.img-top img {
  width: 100%;
  display: block;
}

.img-overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: hsla(178, 100%, 50%, 0.5);
  display: none;
}

.img-top:hover .img-overlay {
  display: block;
}

.img-overlay img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  transform: translate(-50%, -50%);
  background: hsl(216, 50%, 16%);
  opacity: 0.5;
  border-radius: 10px;
}

.box-text a {
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  padding: 20px 0;
  display: inline-block;
}

.box-text a:hover {
  color: hsl(178, 100%, 50%);
}

p {
  color: hsl(215, 51%, 70%);
  font-weight: 300;
  font-size: 16px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  border-bottom: 1px solid hsl(215, 32%, 27%);
}

.eths, .days {
  display: flex;
  align-items: center;
}

.eths p {
  color: hsl(178, 100%, 50%);
  font-weight: 600;
  font-size: 18px;
  padding-left: 10px;
}

.days p {
  font-weight: 400;
  font-size: 18px;
  padding-left: 10px;
}

.author {
  display: flex;
  align-items: center;
  padding-top: 5px;
}

.author img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid hsl(0, 0%, 100%);
  margin-right: 20px;
}

.author p a {
  color:hsl(0, 0%, 100%);
  text-decoration: none;
  font-weight: 600;
}

```