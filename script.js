const roleRotator = document.querySelector('.role-rotator');
const roleArticle = document.querySelector('.role-article');
const roles = [
  { title: 'Senior Product Designer', article: 'a' },
  { title: 'Ecommerce Specialist', article: 'an' },
  { title: 'Designer Fluent in AI', article: 'a' },
  { title: 'Designer Who Codes', article: 'a' },
];
let roleIndex = 0;

// Preserve media geometry while a shared loading treatment is visible.
document.querySelectorAll('img, video').forEach((media) => {
  const ready = media.tagName === 'IMG'
    ? media.complete && media.naturalWidth > 0
    : media.readyState >= 2;
  const markReady = () => media.classList.add('is-media-ready');
  if (ready) markReady();
  else {
    media.addEventListener(media.tagName === 'IMG' ? 'load' : 'loadeddata', markReady, { once:true });
    media.addEventListener('error', markReady, { once:true });
  }
});

document.querySelectorAll('.project-image').forEach((image) => {
  const slides = image.querySelectorAll('.media-slides i');
  let frame = 0;
  let interval;

  image.addEventListener('mouseenter', () => {
    image.classList.add('showing-media');
    slides[frame].classList.add('active');
    interval = window.setInterval(() => {
      slides[frame].classList.remove('active');
      frame = (frame + 1) % slides.length;
      slides[frame].classList.add('active');
    }, 3000);
  });

  image.addEventListener('mouseleave', () => {
    window.clearInterval(interval);
    image.classList.remove('showing-media');
    slides.forEach((slide) => slide.classList.remove('active'));
    frame = 0;
  });
});


if (roleRotator && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.setInterval(() => {
    roleRotator.classList.add('is-changing');
    window.setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleRotator.textContent = roles[roleIndex].title;
      roleArticle.textContent = roles[roleIndex].article;
      roleRotator.classList.remove('is-changing');
    }, 400);
  }, 4600);
}

// Enlarged media viewer for case-study pages only.
const lightboxEnabled = Boolean(document.querySelector('.case-study'));
const lightbox = document.createElement('div');
lightbox.className = 'media-lightbox';
lightbox.setAttribute('role', 'dialog');
lightbox.setAttribute('aria-modal', 'true');
lightbox.setAttribute('aria-label', 'Enlarged media');
lightbox.setAttribute('aria-hidden', 'true');
lightbox.innerHTML = '<button class="media-lightbox-close" type="button" aria-label="Close enlarged media">×</button><div class="media-lightbox-content"></div>';
document.body.appendChild(lightbox);

const lightboxContent = lightbox.querySelector('.media-lightbox-content');
const lightboxClose = lightbox.querySelector('.media-lightbox-close');
let lightboxTrigger = null;

function closeLightbox() {
  if (!lightbox.classList.contains('is-open')) return;
  lightbox.querySelector('video')?.pause();
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  lightboxContent.replaceChildren();
  lightboxTrigger?.focus?.({ preventScroll: true });
}

function openLightbox(media) {
  const isVideo = media.tagName === 'VIDEO';
  const enlarged = document.createElement(isVideo ? 'video' : 'img');
  if (isVideo) {
    enlarged.src = media.currentSrc || media.querySelector('source')?.src || media.src;
    enlarged.poster = media.poster;
    enlarged.controls = true;
    enlarged.autoplay = true;
    enlarged.loop = media.loop;
    enlarged.muted = media.muted;
    enlarged.playsInline = true;
  } else {
    enlarged.src = media.currentSrc || media.src;
    enlarged.alt = media.alt || '';
  }
  lightboxTrigger = media;
  lightboxContent.replaceChildren(enlarged);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  lightboxClose.focus();
}

document.addEventListener('click', (event) => {
  if (!lightboxEnabled) return;
  const media = event.target.closest('img, video');
  if (!media || media.closest('.media-lightbox, .portfolio-companion') || media.dataset.noLightbox !== undefined) return;
  event.preventDefault();
  event.stopPropagation();
  openLightbox(media);
}, true);

lightboxClose.addEventListener('click', closeLightbox);
lightboxContent.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') closeLightbox();
});
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

// Homepage case studies open in the shared large project modal. Filtering stays
// as a dedicated page because its longer case study includes a contents rail.
const caseModalTriggers = [...document.querySelectorAll('[data-case-modal]')];
if (caseModalTriggers.length) {
  const caseStudies = {
    'ai-qa': {
      title: 'AI Q&A',
      category: 'Ecommerce · AI-assisted shopping',
      overview: 'Helping shoppers get useful, relevant answers as they explore products and make more confident decisions.',
      impact: '+20% order rate<sup>*</sup><small>*adjusted</small>',
      role: 'Lead UX designer',
      prototype: true,
    },
    'empty-cart': {
      title: 'Empty Cart Banner',
      category: 'Ecommerce · AI-enabled development',
      overview: 'An empty-cart experience that turns a dead end into a helpful next step.',
      role: 'Designer + developer',
      media: 'assets/empty-cart-live.mp4',
      summaryTwoColumn: true,
      details: [
        'This project is part of an initiative exploring AI-enabled development by designers. With Claude Code, I built and shipped a responsive empty-cart banner that pulls pills from two backend menus: curated shop links and trending searches.',
        'To support the work, I moved the shared menu and search logic into a common component library, allowing this and other apps to reuse it instead of maintaining separate implementations.',
      ],
    },
  };

  const caseModal = document.createElement('dialog');
  caseModal.className = 'project-modal';
  caseModal.setAttribute('aria-label', 'Project case study');
  caseModal.innerHTML = '<div class="project-modal-content"></div>';
  document.body.appendChild(caseModal);

  const caseModalContent = caseModal.querySelector('.project-modal-content');
  let caseModalTrigger = null;

  function caseStudyMarkup(project) {
    let finalSection;
    if (project.prototype) {
      finalSection = `<section class="ai-prototype-section" aria-labelledby="modal-ai-prototype-title">
          <h2 id="modal-ai-prototype-title">Try it out yourself</h2>
          <div class="ai-prototype-frame">
            <iframe class="ai-prototype-embed" src="prototypes/ai-qanda/index.html" title="Interactive AI Q&A prototype" scrolling="no"></iframe>
          </div>
        </section>`;
    } else if (project.media) {
      finalSection = `<section class="ai-prototype-section" aria-labelledby="modal-empty-cart-visual-title">
          <h2 id="modal-empty-cart-visual-title">Live in production</h2>
          <div class="modal-media project-case-media">
            <video width="1150" height="640" autoplay muted loop playsinline preload="metadata" aria-label="Empty Cart Banner live interaction">
              <source src="${project.media}" type="video/mp4" />
            </video>
          </div>
        </section>`;
    } else {
      finalSection = `<section class="ai-prototype-section project-case-placeholder" aria-labelledby="modal-placeholder-title">
          <h2 id="modal-placeholder-title">More details coming soon</h2>
          <div class="modal-media skeleton-media" aria-label="Case study content coming soon">COMING SOON</div>
        </section>`;
    }

    return `<article class="modal-sheet case-study filtering-study ai-study">
      <button class="modal-close" type="button" aria-label="Close case study">Close</button>
      <header class="modal-header">
        <h2>${project.title}</h2>
        <p>${project.category}</p>
      </header>
      <section class="filtering-intro" aria-label="Project overview">
        <div class="filtering-summary${project.summaryTwoColumn ? ' is-two-column' : ''}">
          <section class="filtering-summary-card filtering-summary-overview">
            <p class="eyebrow">Overview</p>
            <p${project.overviewLarge ? ' class="modal-overview-large"' : ''}>${project.overview}</p>
          </section>
          ${project.impact ? `<section class="filtering-summary-card filtering-summary-impact">
            <p class="eyebrow">${project.impactLabel || 'Impact'}</p>
            <p class="${project.impactPlain ? 'modal-summary-copy' : 'modal-impact'}">${project.impact}</p>
          </section>` : ''}
          <section class="filtering-summary-card filtering-summary-role">
            <p class="eyebrow">Role</p>
            <p>${project.role}</p>
          </section>
        </div>
      </section>
      ${project.details ? `<section class="project-case-copy">${project.details.map((paragraph) => `<p>${paragraph}</p>`).join('')}</section>` : ''}
      ${finalSection}
    </article>`;
  }

  function closeCaseModal() {
    if (!caseModal.open) return;
    caseModal.close();
  }

  caseModalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const project = caseStudies[trigger.dataset.caseModal];
      if (!project) return;
      caseModalTrigger = trigger;
      caseModalContent.innerHTML = caseStudyMarkup(project);
      caseModal.showModal();
      document.body.classList.add('project-modal-open');
      caseModal.querySelector('.modal-close').focus();
    });
  });

  caseModal.addEventListener('click', (event) => {
    if (event.target.closest('.modal-close')) {
      closeCaseModal();
      return;
    }
    const bounds = caseModal.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) closeCaseModal();
  });
  caseModal.addEventListener('close', () => {
    document.body.classList.remove('project-modal-open');
    caseModalContent.replaceChildren();
    caseModalTrigger?.focus({ preventScroll: true });
  });
}

// Keep the embedded AI Q&A prototype flush to its content as answers expand.
window.addEventListener('message', (event) => {
  if (event.data?.type !== 'ai-qanda-height') return;

  document.querySelectorAll('.ai-prototype-embed').forEach((prototype) => {
    prototype.parentElement.style.height = `${event.data.height}px`;
  });
});

// Shared contact dialog. Email is copied rather than opened with a mailto link.
const contactTriggers = [...document.querySelectorAll('[data-contact-open]')];
if (contactTriggers.length) {
  const contactEmail = 'rxmichelson@gmail.com';
  const contactModal = document.createElement('div');
  contactModal.className = 'contact-modal';
  contactModal.setAttribute('role', 'dialog');
  contactModal.setAttribute('aria-modal', 'true');
  contactModal.setAttribute('aria-labelledby', 'contact-modal-title');
  contactModal.setAttribute('aria-hidden', 'true');
  contactModal.innerHTML = `
    <div class="contact-modal-panel">
      <div class="contact-modal-header">
        <h2 id="contact-modal-title">Let’s connect</h2>
        <button class="contact-modal-close" type="button" aria-label="Close contact details">×</button>
      </div>
      <div class="contact-options">
        <a class="contact-option" href="https://www.linkedin.com/in/rachelxmichelson/" target="_blank" rel="noreferrer">
          <span>LinkedIn</span><span class="contact-option-arrow" aria-hidden="true">↗</span>
        </a>
        <div class="contact-option">
          <span>${contactEmail}</span><button class="contact-copy" type="button">Copy</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(contactModal);

  const contactClose = contactModal.querySelector('.contact-modal-close');
  const contactCopy = contactModal.querySelector('.contact-copy');
  let contactTrigger = null;

  function openContactModal(trigger) {
    contactTrigger = trigger;
    contactModal.classList.add('is-open');
    contactModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('contact-modal-open');
    contactClose.focus();
  }

  function closeContactModal() {
    if (!contactModal.classList.contains('is-open')) return;
    contactModal.classList.remove('is-open');
    contactModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('contact-modal-open');
    contactCopy.textContent = 'Copy';
    contactTrigger?.focus({ preventScroll: true });
  }

  contactTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      openContactModal(trigger);
    });
  });

  contactClose.addEventListener('click', closeContactModal);
  contactModal.addEventListener('click', (event) => {
    if (event.target === contactModal) closeContactModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeContactModal();
  });
  contactCopy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
    } catch {
      const fallback = document.createElement('textarea');
      fallback.value = contactEmail;
      fallback.setAttribute('readonly', '');
      fallback.style.position = 'fixed';
      fallback.style.opacity = '0';
      document.body.appendChild(fallback);
      fallback.select();
      document.execCommand('copy');
      fallback.remove();
    }
    contactCopy.textContent = 'Copied!';
  });
}
