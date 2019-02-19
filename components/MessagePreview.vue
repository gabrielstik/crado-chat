<template>
  <div class="messagePreview">
    <div class="messagePreview__author">
      <div class="messagePreview__authorPicture">
        <img src="../assets/images/man1.png" alt="author picture">
      </div>
      <div class="messagePreview__authorName">Didier Deschamps</div>
    </div>
    <div class="messagePreview__message">Bravo à toute l'équipe pour avoir rammené la coupe à la maison</div>
  </div>
</template>

<style scoped>
  .messagePreview {
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;

    font-family: 'Muli';
    text-align: left;
    line-height: 1.4;

    background-color: var(--white);

    border-radius: 4px;
    border: 1px solid var(--border);
  }

  .messagePreview__author {
    display: flex;
    align-items: center;
  }

  .messagePreview__authorName {
    margin-left: 20px;

    font-size: 15px;
    color: var(--author);
  }

  .messagePreview__authorPicture {
    width: 32px;
    height: 32px;
    flex-shrink: 0;

    background-color: blueviolet;

    overflow: hidden;

    border-radius: 100%;
  }

  .messagePreview__authorPicture img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  .messagePreview__message {
    margin-left: 52px;

    font-size: 14px;

    color: var(--authorSecondary)
  }
</style>
