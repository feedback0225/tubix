const INPUT_FILE = document.querySelector('#upload-files');
const INPUT_CONTAINER = document.querySelector('#upload-container');
const FILES_LIST_CONTAINER = document.querySelector('#files-list-container');
const FILE_LIST = [];
let UPLOADED_FILES = [];

const removeFile = () => {
  UPLOADED_FILES = document.querySelectorAll('.js-remove-image');

  if (UPLOADED_FILES) {
    UPLOADED_FILES.forEach((image) => {
      image.addEventListener('click', function () {
        const fileIndex = this.getAttribute('data-index');

        FILE_LIST.splice(fileIndex, 1);
        previewImages();
        removeFile();
      });
    });
  } else {
    [...INPUT_FILE.files] = [];
  }
};

if (FILES_LIST_CONTAINER) {
  FILES_LIST_CONTAINER.addEventListener('click', (e) => {
    const svg = FILES_LIST_CONTAINER.querySelector('svg');
    const use = FILES_LIST_CONTAINER.querySelector('use');

    if (e.target === svg || e.target === use) {
      removeFile();
      INPUT_CONTAINER.style.backgroundImage = '';
      FILES_LIST_CONTAINER.innerHTML = '';
      INPUT_CONTAINER.classList.remove('correct');
      INPUT_FILE.value = '';
      FILE_LIST.length = 0;
    }
  });
}

const multipleEvents = (element, eventNames, listener) => {
  const events = eventNames.split(' ');

  events.forEach((event) => {
    element.addEventListener(event, listener, false);
  });
};

const previewImages = () => {
  FILES_LIST_CONTAINER.innerHTML = '';
  if (FILE_LIST.length > 0) {
    FILE_LIST.forEach((addedFile, index) => {
      const content = `
        <span>${addedFile.name}</span>
        <svg  class="icon-24">
        <use xlink:href="../img/sprite.svg#close" />
      </svg>
      `;
      FILES_LIST_CONTAINER.insertAdjacentHTML('beforeEnd', content);
    });
  } else {
    console.log('empty');
    INPUT_FILE.value = '';
  }
};

const fileUpload = () => {
  if (FILES_LIST_CONTAINER) {
    multipleEvents(INPUT_FILE, 'click dragstart dragover', () => {
      INPUT_CONTAINER.classList.add('active');
    });

    multipleEvents(INPUT_FILE, 'dragleave dragend drop change blur', () => {
      INPUT_CONTAINER.classList.remove('active');
    });

    INPUT_FILE.addEventListener('change', () => {
      const files = [...INPUT_FILE.files];
      console.log('changed');
      files.forEach((file) => {
        const fileURL = URL.createObjectURL(file);
        const fileName = file.name;
        if (!file.type.match('image/')) {
          INPUT_CONTAINER.classList.add('wrong');
          INPUT_CONTAINER.classList.remove('correct');
          alert(file.name + ' is not an image');
        } else {
          const uploadedFiles = {
            name: fileName,
            url: fileURL,
          };
          INPUT_CONTAINER.classList.add('correct');
          INPUT_CONTAINER.classList.remove('wrong');
          FILE_LIST.push(uploadedFiles);

          INPUT_CONTAINER.style.backgroundImage = `url(${uploadedFiles.url})`;
        }
      });

      console.log(FILE_LIST); //final list of uploaded files
      previewImages();
      UPLOADED_FILES = document.querySelectorAll('.js-remove-image');
      removeFile();
    });
  }
};

fileUpload();
removeFile();
