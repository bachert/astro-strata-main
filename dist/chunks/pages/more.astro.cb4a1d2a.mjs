import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro.16d70255.mjs';
import 'html-escaper';
import { $ as $$Header, a as $$GetInTouch, b as $$Footer, c as $$Layout } from './index.astro.34df4ff4.mjs';
/* empty css                          */import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'slash';
/* empty css                           */
const $$Astro$1 = createAstro();
const $$ErfahreMehr = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ErfahreMehr;
  return renderTemplate`<!-- Erfahre mehr Section -->${maybeRenderHead($$result)}<section id="erfahre-mehr" class="astro-7235EMAO">
    <header class="major astro-7235EMAO">
      <h2 class="astro-7235EMAO">Erfahre mehr</h2>
    </header>
    <p class="astro-7235EMAO">
      Meine Online-Mathematiknachhilfe findet über Google Meet statt. Eine Einheit von 50 Minuten kostet 25 Euro, ohne feste Vertragslaufzeit. Als Nachhilfelehrer bin ich registriert und habe umfangreiche Erfahrung darin, Schüler*innen und Student*innen zu unterstützen. Hier sind einige Bilder von meinen Aufzeichnungen während der Nachhilfe sowie meine Zertifikate.
    </p>
    <div class="info astro-7235EMAO">
      <p class="astro-7235EMAO">
        <strong class="astro-7235EMAO">Preis pro Einheit:</strong> 25 Euro (50 Minuten)
      </p>
      <p class="astro-7235EMAO">
        <strong class="astro-7235EMAO">Plattform:</strong> Google Meet
      </p>
      <p class="astro-7235EMAO">
        <strong class="astro-7235EMAO">Vertragslaufzeit:</strong> Keine
      </p>
    </div>
    <div class="gallery astro-7235EMAO">
        <!-- Hier kommen deine Bilder von Aufzeichnungen während der Nachhilfe sowie deine Zertifikate -->
        <div class="gallery-item astro-7235EMAO">
          <img src="src/assets/Screenshot (86).png" alt="Aufzeichnungen während der Nachhilfe" class="astro-7235EMAO">
        </div>
        <div class="gallery-item astro-7235EMAO">
          <img src="src/assets/Screenshot (87).png" alt="Aufzeichnungen während der Nachhilfe" class="astro-7235EMAO">
        </div>
        <div class="gallery-item astro-7235EMAO">
          <img src="src/assets/Screenshot (88).png" alt="Aufzeichnungen während der Nachhilfe" class="astro-7235EMAO">
        </div>
        <div class="gallery-item astro-7235EMAO">
          <img src="src/assets/Screenshot (89).png" alt="Aufzeichnungen während der Nachhilfe" class="astro-7235EMAO">
        </div>
        <!-- Füge weitere Bilder hinzu, falls gewünscht -->
      </div>
  </section>`;
}, "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/components/ErfahreMehr.astro");

const $$Astro = createAstro();
const $$More = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$More;
  const title = "Individuelle Online Nachhilfe!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, {})}

	${maybeRenderHead($$result2)}<div id="main">
        ${renderComponent($$result2, "Mehr", $$ErfahreMehr, {})}
		${renderComponent($$result2, "GetInTouch", $$GetInTouch, {})}
	</div>

	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/pages/more.astro");

const $$file = "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/pages/more.astro";
const $$url = "/more";

export { $$More as default, $$file as file, $$url as url };
