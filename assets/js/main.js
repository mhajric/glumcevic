document.addEventListener('DOMContentLoaded', () => {

  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  document.querySelectorAll('#mobileMenu a').forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));

  new Swiper('.hero-swiper', {
    loop: true,
    autoplay: { delay: 5500, disableOnInteraction: false },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    pagination: { el: '.hero-swiper .swiper-pagination', clickable: true },
    navigation: { nextEl: '.hero-swiper .swiper-button-next', prevEl: '.hero-swiper .swiper-button-prev' }
  });

  const windowContents = document.querySelectorAll('.window-content');
  const windowSwiper = new Swiper('.window-swiper', {
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    pagination: { el: '.window-swiper .swiper-pagination', clickable: true },
    navigation: { nextEl: '.window-swiper .swiper-button-next', prevEl: '.window-swiper .swiper-button-prev' },
    on: {
      init() { updateWindowText(this.realIndex); },
      slideChange() { updateWindowText(this.realIndex); }
    }
  });

  function updateWindowText(index) {
    windowContents.forEach((content, i) => content.classList.toggle('hidden', i !== index));
  }

  const doorContents = document.querySelectorAll('.door-content');
  const doorSwiper = new Swiper('.door-swiper', {
    loop: true,
    direction: 'vertical',
    autoplay: { delay: 4500, disableOnInteraction: false },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    pagination: { el: '.door-swiper .swiper-pagination', clickable: true },
    navigation: { nextEl: '.door-swiper .swiper-button-next', prevEl: '.door-swiper .swiper-button-prev' },
    on: {
      init() { updateDoorText(this.realIndex); },
      slideChange() { updateDoorText(this.realIndex); }
    }
  });

  function updateDoorText(index) {
    doorContents.forEach((content, i) => content.classList.toggle('hidden', i !== index));
  }

  function updateDoorSwiperDirection() {
    doorSwiper.changeDirection(window.innerWidth < 768 ? 'horizontal' : 'vertical');
  }
  updateDoorSwiperDirection();
  window.addEventListener('resize', updateDoorSwiperDirection);

/* =========================================================
   DODATNE MOGUĆNOSTI
========================================================= */


/*
 * Options swiper.
 */

new Swiper('.optionsSwiper', {

  slidesPerView: 1,

  spaceBetween: 20,

  breakpoints: {

    640: {
      slidesPerView: 2
    },

    1024: {
      slidesPerView: 3
    }

  },

  pagination: {
    el: '.optionsSwiper .swiper-pagination',
    clickable: true
  }

});


/*
 * Reveal elements.
 */

const optionReveal =
  document.getElementById('optionReveal');

const optionCollapse =
  document.getElementById('optionCollapse');

const optionRevealLabel =
  document.getElementById('optionRevealLabel');

const optionRevealTitle =
  document.getElementById('optionRevealTitle');

const optionRevealIntro =
  document.getElementById('optionRevealIntro');


/*
 * Option data.
 */

const optionData = {

  boje: {
    label: 'Boja i tekstura',

    title: 'Prilagodite izgled svojoj priči.',

    intro:
      'Izgled stolarije možemo prilagoditi prostoru kroz izbor boje, dekora i teksture.',

    contentId: 'optionContentBoje'
  },


  roletne: {
    label: 'Roletne i komarnici',

    title: 'Više udobnosti i zaštite.',

    intro:
      'Dodatna rješenja za kontrolu svjetlosti, zaštitu od insekata i veću udobnost prostora.',

    contentId: 'optionContentRoletne'
  },


  klupice: {
    label: 'Klupice',

    title: 'Detalj koji upotpunjuje prozor.',

    intro:
      'Unutrašnje i vanjske klupice biramo tako da funkcionalno i vizuelno odgovaraju cijelom rješenju.',

    contentId: 'optionContentKlupice'
  }

};


/*
 * Show selected option content.
 */

function showOptionContent(optionKey) {

  document
    .querySelectorAll('.option-reveal-content')
    .forEach(section => {

      section.classList.add('hidden');

    });


  const data =
    optionData[optionKey];

  if (!data) {
    return;
  }


  const content =
    document.getElementById(data.contentId);

  if (content) {

    content.classList.remove('hidden');

  }

}


/*
 * Open option.
 */

function openOption(optionKey) {

  const data =
    optionData[optionKey];

  if (!data) {
    return;
  }


  optionRevealLabel.textContent =
    data.label;

  optionRevealTitle.textContent =
    data.title;

  optionRevealIntro.textContent =
    data.intro;


  showOptionContent(optionKey);


  optionReveal.classList.remove(
    'grid-rows-[0fr]',
    'opacity-0'
  );

  optionReveal.classList.add(
    'grid-rows-[1fr]',
    'opacity-100'
  );

}


/*
 * Close option reveal.
 */

function closeOption() {

  optionReveal.classList.remove(
    'grid-rows-[1fr]',
    'opacity-100'
  );

  optionReveal.classList.add(
    'grid-rows-[0fr]',
    'opacity-0'
  );

}


/*
 * Option card click.
 */

document
  .querySelectorAll('.option-card')
  .forEach(card => {

    card.addEventListener(
      'click',
      () => {

        openOption(
          card.dataset.option
        );

      }
    );

  });


/*
 * Collapse button.
 */

optionCollapse.addEventListener(
  'click',
  closeOption
);
 
 
/* SMART CONTACT FORM — based on the supplied source */
  const form = document.getElementById('smartContactForm');
  const completedSteps = document.getElementById('completedSteps');
  const activeSteps = document.getElementById('activeSteps');
  const progress = document.getElementById('smartFormProgress');

  const formState = {
    objectType: null,
    products: [],
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  function renderStep1() {
    progress.textContent = '1 / 4';
    activeSteps.innerHTML = `
      <div id="activeStep" class="border-b border-slate-200 px-6 py-6 sm:px-8">
        <div class="mb-5">
          <p class="text-sm font-semibold text-slate-500">Korak 1</p>
          <h4 class="mt-1 text-xl font-bold text-slate-900">Šta vam je potrebno?</h4>
        </div>
        <div class="grid gap-3 sm:grid-cols-2">
          ${radioOption('stan', 'Stan')}
          ${radioOption('kuca', 'Kuća')}
          ${radioOption('poslovni', 'Poslovni objekat')}
          ${radioOption('drugo', 'Drugo')}
        </div>
        <div class="mt-6 flex justify-end">
          <button type="button" id="step1Next" class="rounded-full bg-brand-700 px-7 py-3 font-semibold text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-40" disabled>Sljedeće</button>
        </div>
      </div>`;

    const radios = activeSteps.querySelectorAll('input[name="objectType"]');
    const nextButton = document.getElementById('step1Next');

    radios.forEach(radio => radio.addEventListener('change', () => {
      formState.objectType = radio.value;
      nextButton.disabled = false;
    }));

    nextButton.addEventListener('click', () => {
      addCompletedStep('Šta vam je potrebno?', objectTypeLabel(formState.objectType));
      renderStep2();
      scrollToActiveStep();
    });
  }

  function renderStep2() {
    progress.textContent = '2 / 4';
    activeSteps.innerHTML = `
      <div id="activeStep" class="border-b border-slate-200 px-6 py-6 sm:px-8">
        <div class="mb-5">
          <p class="text-sm font-semibold text-slate-500">Korak 2</p>
          <h4 class="mt-1 text-xl font-bold text-slate-900">Šta želite?</h4>
          <p class="mt-2 text-sm leading-relaxed text-slate-500">Možete odabrati jednu ili više mogućnosti.</p>
        </div>
        <div class="grid gap-3 sm:grid-cols-2">
          ${checkboxOption('prozori', 'PVC prozori')}
          ${checkboxOption('vrata', 'PVC vrata')}
          ${checkboxOption('aluminij', 'Aluminijska stolarija')}
          ${checkboxOption('opcije', 'Dodatne mogućnosti')}
        </div>
        <div class="mt-6 flex justify-end">
          <button type="button" id="step2Next" class="rounded-full bg-brand-700 px-7 py-3 font-semibold text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-40" disabled>Sljedeće</button>
        </div>
      </div>`;

    const checkboxes = activeSteps.querySelectorAll('input[name="product"]');
    const nextButton = document.getElementById('step2Next');

    checkboxes.forEach(checkbox => checkbox.addEventListener('change', () => {
      formState.products = Array.from(checkboxes).filter(input => input.checked).map(input => input.value);
      nextButton.disabled = formState.products.length === 0;
    }));

    nextButton.addEventListener('click', () => {
      addCompletedStep('Šta želite?', formState.products.map(productLabel).join(', '));
      renderStep3();
      scrollToActiveStep();
    });
  }

  function renderStep3() {
    progress.textContent = '3 / 4';
    activeSteps.innerHTML = `
      <div id="activeStep" class="border-b border-slate-200 px-6 py-6 sm:px-8">
        <div class="mb-5">
          <p class="text-sm font-semibold text-slate-500">Korak 3</p>
          <h4 class="mt-1 text-xl font-bold text-slate-900">Osnovne informacije</h4>
          <p class="mt-2 text-sm leading-relaxed text-slate-500">Ove informacije su nam potrebne kako bismo vas mogli kontaktirati.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <input id="contactName" type="text" name="name" placeholder="Ime i prezime" autocomplete="name" class="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100">
          <input id="contactPhone" type="tel" name="phone" placeholder="Telefon" autocomplete="tel" class="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100">
          <input id="contactEmail" type="email" name="email" placeholder="E-mail" autocomplete="email" class="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100 sm:col-span-2">
        </div>
        <div class="mt-6 flex justify-end">
          <button type="button" id="step3Next" class="rounded-full bg-brand-700 px-7 py-3 font-semibold text-white transition hover:bg-brand-800">Sljedeće</button>
        </div>
      </div>`;

    document.getElementById('step3Next').addEventListener('click', () => {
      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const email = document.getElementById('contactEmail').value.trim();

      if (!name || !phone) {
        alert('Molimo unesite ime i telefon.');
        return;
      }

      formState.name = name;
      formState.phone = phone;
      formState.email = email;

      addCompletedStep('Osnovne informacije', `${name} · ${phone}${email ? ` · ${email}` : ''}`);
      renderStep4();
      scrollToActiveStep();
    });
  }

  function renderStep4() {
    progress.textContent = '4 / 4';
    activeSteps.innerHTML = `
      <div id="activeStep" class="px-6 py-6 sm:px-8">
        <div class="mb-5">
          <p class="text-sm font-semibold text-slate-500">Korak 4</p>
          <h4 class="mt-1 text-xl font-bold text-slate-900">Još nešto što želite dodati?</h4>
          <p class="mt-2 text-sm leading-relaxed text-slate-500">Opišite ukratko šta vam je potrebno.</p>
        </div>
        <textarea id="contactMessage" name="message" rows="5" placeholder="Npr. zamjena postojeće stolarije, približan broj prozora, posebni zahtjevi..." class="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100"></textarea>
        <div class="mt-4 rounded-xl border-2 border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">
          <span class="font-medium text-slate-700">Fotografije / nacrti / postojeće stanje</span><br>
          <span class="text-xs">Upload je pripremljen za kasnije povezivanje.</span>
        </div>
        <div class="mt-6">
          <button type="submit" class="w-full rounded-full bg-brand-700 px-7 py-4 font-semibold text-white transition hover:bg-brand-800">Pošalji upit</button>
          <p class="mt-3 text-center text-xs text-slate-500">Otvorit ćemo vaš e-mail program sa pripremljenim upitom.</p>
        </div>
      </div>`;
  }

  function radioOption(value, label) {
    return `
      <label class="cursor-pointer">
        <input type="radio" name="objectType" value="${value}" class="peer sr-only">
        <span class="block rounded-xl border border-slate-200 p-4 font-medium transition hover:border-brand-300 peer-checked:border-brand-700 peer-checked:bg-brand-50 peer-checked:text-brand-800">${label}</span>
      </label>`;
  }

  function checkboxOption(value, label) {
    return `
      <label class="cursor-pointer">
        <input type="checkbox" name="product" value="${value}" class="peer sr-only">
        <span class="block rounded-xl border border-slate-200 p-4 font-medium transition hover:border-brand-300 peer-checked:border-brand-700 peer-checked:bg-brand-50 peer-checked:text-brand-800">${label}</span>
      </label>`;
  }

  function addCompletedStep(title, value) {
    const wrapper = document.createElement('div');
    wrapper.className = 'border-b border-slate-200 bg-slate-50 px-6 py-5 sm:px-8';
    wrapper.innerHTML = `
      <div class="flex items-start gap-4">
        <div class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">✓</div>
        <div class="min-w-0">
          <p class="text-sm font-semibold text-slate-500">${title}</p>
          <p class="mt-1 font-bold text-slate-900">${value}</p>
        </div>
      </div>`;
    completedSteps.appendChild(wrapper);
  }

  function objectTypeLabel(value) {
    return { stan: 'Stan', kuca: 'Kuća', poslovni: 'Poslovni objekat', drugo: 'Drugo' }[value] || value;
  }

  function productLabel(value) {
    return { prozori: 'PVC prozori', vrata: 'PVC vrata', aluminij: 'Aluminijska stolarija', opcije: 'Dodatne mogućnosti' }[value] || value;
  }

  function scrollToActiveStep() {
    setTimeout(() => {
      const activeStep = document.getElementById('activeStep');
      if (!activeStep) return;
      const position = activeStep.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }, 100);
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    formState.message = document.getElementById('contactMessage')?.value.trim() || '';

    const recipient = 'info@glumcevic.ba';
    const subject = 'Novi upit putem web stranice – Glumčević';

    const body = `
NOVI UPIT – GLUMČEVIĆ

ŠTA VAM JE POTREBNO
${objectTypeLabel(formState.objectType)}

ŠTA ŽELITE
${formState.products.map(productLabel).join(', ')}

OSNOVNE INFORMACIJE
Ime i prezime: ${formState.name}
Telefon: ${formState.phone}
E-mail: ${formState.email || '-'}

DODATNO
${formState.message || '-'}

----------------------------------------
Upit je poslan putem web stranice.
    `.trim();

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });

  renderStep1();
});
