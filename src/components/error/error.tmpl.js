export const template = `
  <div class="error">
    <h2 class="error__title">{{ title }}</h2>
    <p class="error__description">{{ description }}</p>
    {{ children.link }}
  </div>
`;