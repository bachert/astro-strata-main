import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_cMhD-XD7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Header, a as $$GetInTouch, b as $$Footer, c as $$Layout } from './index_s6vp8f_X.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ErfahreMehr = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ErfahreMehr;
  return renderTemplate`<!-- Erfahre mehr Section -->${maybeRenderHead()}<section id="erfahre-mehr" data-astro-cid-7235emao> <header class="major" data-astro-cid-7235emao> <h2 data-astro-cid-7235emao>Erfahre mehr</h2> </header> <p data-astro-cid-7235emao>
Meine Online-Mathematiknachhilfe findet über Google Meet statt. Eine Einheit von 50 Minuten kostet 25 Euro, ohne feste Vertragslaufzeit. Als Nachhilfelehrer bin ich registriert und habe umfangreiche Erfahrung darin, Schüler*innen und Student*innen zu unterstützen. Hier sind einige Bilder von meinen Aufzeichnungen während der Nachhilfe sowie meine Zertifikate.
</p> <div class="info" data-astro-cid-7235emao> <p data-astro-cid-7235emao> <strong data-astro-cid-7235emao>Preis pro Einheit:</strong> 25 Euro (50 Minuten)
</p> <p data-astro-cid-7235emao> <strong data-astro-cid-7235emao>Plattform:</strong> Google Meet
</p> <p data-astro-cid-7235emao> <strong data-astro-cid-7235emao>Vertragslaufzeit:</strong> Keine
</p> </div> <div class="gallery" data-astro-cid-7235emao> <!-- Hier kommen deine Bilder von Aufzeichnungen während der Nachhilfe sowie deine Zertifikate --> <div class="gallery-item" data-astro-cid-7235emao> <img src="astro-strata-main/src/assets/Screenshot86.jpg" alt="Aufzeichnungen während der Nachhilfe" data-astro-cid-7235emao> </div> <div class="gallery-item" data-astro-cid-7235emao> <img src="../assets/Screenshot (87).png" alt="Aufzeichnungen während der Nachhilfe" data-astro-cid-7235emao> </div> <div class="gallery-item" data-astro-cid-7235emao> <img src="../assets/Screenshot (88).png" alt="Aufzeichnungen während der Nachhilfe" data-astro-cid-7235emao> </div> <div class="gallery-item" data-astro-cid-7235emao> <img src="../assets/Screenshot (89).png" alt="Aufzeichnungen während der Nachhilfe" data-astro-cid-7235emao> </div> <!-- Füge weitere Bilder hinzu, falls gewünscht --> </div> </section> `;
}, "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/components/ErfahreMehr.astro", void 0);

const $$Astro = createAstro();
const $$More = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$More;
  const title = "Individuelle Online Nachhilfe!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div id="main"> ${renderComponent($$result2, "Mehr", $$ErfahreMehr, {})} ${renderComponent($$result2, "GetInTouch", $$GetInTouch, {})} </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/pages/more.astro", void 0);

const $$file = "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/pages/more.astro";
const $$url = "/more";

export { $$More as default, $$file as file, $$url as url };
