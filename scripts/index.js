const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];
// Profile elements
const editModalButton = document.querySelector(".profile__edit-btn");
const newPostModalButton = document.querySelector(".profile__new-post-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// Form elements
const editModal = document.querySelector("#edit-modal");
const editForm = editModal.querySelector(".modal__form");
const editModalCloseButton = editModal.querySelector(".modal__close-button");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const newPostLinkInput = newPostModal.querySelector("#new-post-link-input");
const newPostCaptionInput = newPostModal.querySelector("#new-post-name-input");

// Card related elements
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editModal);
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  const inputValues = {
    name: newPostCaptionInput.value,
    link: newPostLinkInput.value,
  };
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  closeModal(newPostModal);
}

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardNameEl = cardElement.querySelector(".card__title");

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeBTn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  cardLikeBTn.addEventListener("click", () => {
    cardLikeBTn.classList.toggle("card__like-button_liked");
  });

  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove("card");
  });

  return cardElement;
}

editModalButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  openModal(editModal);
});

editModalCloseButton.addEventListener("click", () => {
  closeModal(editModal);
});

newPostModalButton.addEventListener("click", () => {
  // newPostLinkInput.value = profileName.textContent;
  // newPostCaptionInput.value = profileDescription.textContent;
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", () => {
  closeModal(newPostModal);
});

editForm.addEventListener("submit", handleEditFormSubmit);
newPostForm.addEventListener("submit", handleNewPostSubmit);

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});
