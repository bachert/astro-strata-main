import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from '../astro.16d70255.mjs';
import 'html-escaper';
/* empty css                           */
const $$Astro$6 = createAstro();
const $$Featured = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Featured;
  return renderTemplate`<!-- One --><!-- Main -->${maybeRenderHead($$result)}<section id="one">
	<header class="major">
	  <h2>
		Erfahrene Online-Mathematik-Nachhilfe für dich!
	  </h2>
	</header>
	<p>
	  Mit über 6 Jahren Erfahrung als engagierter Nachhilfelehrer biete ich maßgeschneiderte Online-Mathematikunterstützung für Schüler*innen und Student*innen an. Mein Schwerpunkt liegt darauf, komplexe mathematische Konzepte verständlich zu vermitteln und Schüler*innen dabei zu helfen, ihre Fähigkeiten zu verbessern und Selbstvertrauen in dieses Fach zu gewinnen.
	</p>
	<p>
	  Während meiner langjährigen Tätigkeit habe ich wertvolle Einblicke gewonnen und mich ständig weiterentwickelt. Als Teil eines ehrenamtlichen Projekts zur Sommerschule konnte ich meine pädagogischen Fähigkeiten vertiefen und meine Lehrmethoden an verschiedene Lernstile anpassen.
	</p>
	<p>
	  Mein Hintergrund in Maschinenbau und Verfahrenstechnik hat meine Fähigkeit zur Problemlösung gestärkt, was mir hilft, Mathematik auf eine zugängliche und effektive Weise zu vermitteln. Meine Online-Nachhilfestunden sind darauf ausgerichtet, auf die individuellen Bedürfnisse der Lernenden einzugehen und ihnen zu helfen, ihr volles Potenzial in diesem Fach zu entfalten.
	</p>
	<ul class="actions">
	  <li><a href="more" class="button">Erfahre mehr</a></li>
	</ul>
  </section>`;
}, "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/components/Featured.astro");

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`<!-- Footer -->${maybeRenderHead($$result)}<footer id="footer">
	<div class="inner">
		<ul class="icons">

			<li>
				<a href="bachertlars@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a>
			</li>
		</ul>
		<ul class="copyright">
			Foto von <a href="https://unsplash.com/de/@d_apurvdas?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Apurv Das</a> auf <a href="https://unsplash.com/de/fotos/ein-dunkelblauer-hintergrund-mit-welligen-formen-4soXarjm9do?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
			<li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
			<li>Powered by <a href="https://astro.build">Astro</a></li>
		</ul>
	</div>
</footer>`;
}, "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/components/Footer.astro");

const $$Astro$4 = createAstro();
const $$GetInTouch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GetInTouch;
  return renderTemplate`<!-- Three -->${maybeRenderHead($$result)}<section id="three">
	<h2>Get In Touch</h2>
	<p>
		Wenn du Interesse an meiner individuellen Mathematik-Nachhilfe oder weitere Fragen dazu hast, zögere nicht, mich zu kontaktieren. Ich stehe für Online-Nachhilfestunden zur Verfügung und freue mich mit dir gemeinsam die Mathematik verständlich zu machen. Schicke mir gerne eine E-Mail, Whatsapp oder fülle das Kontaktformular (noch in Arbeit) aus – ich werde mich so schnell wie möglich bei dir melden.
	</p>
	<div class="row">
		<div class="col-8 col-12-small">
			<form method="post" action="#">
				<div class="row gtr-uniform gtr-50">
					<div class="col-6 col-12-xsmall">
						<input type="text" name="name" id="name" placeholder="Name">
					</div>
					<div class="col-6 col-12-xsmall">
						<input type="email" name="email" id="email" placeholder="Email">
					</div>
					<div class="col-12">
						<textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
					</div>
				</div>
			</form>
			<ul class="actions">
				<li><input type="submit" value="Send Message"></li>
			</ul>
		</div>
		<div class="col-4 col-12-small">
			<ul class="labeled-icons">
				<li>
					<h3 class="icon solid fa-home">
						<span class="label">Addresse</span>
					</h3>
					Nähe Kaiserslautern
				</li>
				<li>
					<h3 class="icon solid fa-mobile-alt">
						<span class="label">Phone</span>
					</h3>
					+49 178 6590210
				</li>
				<li>
					<h3 class="icon solid fa-envelope">
						<span class="label">Email</span>
					</h3>
					<a href="#">bachertlars@gmail.com</a>
				</li>
			</ul>
		</div>
	</div>
</section>`;
}, "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/components/GetInTouch.astro");

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!-- Header -->${maybeRenderHead($$result)}<header id="header">
	<div class="inner">
	  <a href="#" class="image avatar"><img src="src/assets/IMGL5738-Bearbeitet (1).jpg" alt=""></a>
	  <h1>
		<strong>Hallo, ich bin Lars!</strong><br>
		Dein engagierter Nachhilfelehrer, der dich auf dem Weg zu besseren Noten unterstützt!		
		
	  </h1>
	</div>
  </header>`;
}, "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/components/Header.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$VendorScripts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$VendorScripts;
  return renderTemplate(_a || (_a = __template(['<script async src="/js/jquery.min.js"><\/script>\n<script defer src="/js/jquery.poptrox.min.js"><\/script>\n<script async src="/js//browser.min.js"><\/script>\n<script async src="/js//breakpoints.min.js"><\/script>\n<script defer src="/js//util.js"><\/script>\n<script defer src="/js//main.js"><\/script>'])));
}, "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/components/VendorScripts.astro");

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<meta name="viewport" content="width=device-width">
		<!-- 3rd-party scripts -->
		${renderComponent($$result, "VendorScripts", $$VendorScripts, {})}

		<title>${title}</title>
	${renderHead($$result)}</head>
	<body class="is-preload">
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/layouts/Layout.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Individuelle Online Nachhilfe!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Header", $$Header, {})}

	${maybeRenderHead($$result2)}<div id="main">
		${renderComponent($$result2, "Featured", $$Featured, {})}
		${renderComponent($$result2, "GetInTouch", $$GetInTouch, {})}
	</div>

	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/pages/index.astro");

const $$file = "C:/Users/bache/OneDrive/Desktop/Portfolio/astro-strata-main/astro-strata-main/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, $$GetInTouch as a, $$Footer as b, $$Layout as c, index as i };
