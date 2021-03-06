(function () {
	var f = !0,
		h = null,
		i = !1,
		j = this;

	function aa(a) {
		var b = typeof a;
		if ("object" == b) if (a) {
			if (a instanceof Array) return "array";
			if (a instanceof Object) return b;
			var c = Object.prototype.toString.call(a);
			if ("[object Window]" == c) return "object";
			if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
			if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
		} else return "null";
		else if ("function" == b && "undefined" == typeof a.call) return "object";
		return b
	}
	function k(a) {
		return void 0 !== a
	}
	function l(a) {
		return "string" == typeof a
	}
	function m(a, b) {
		var c = a.split("."),
			d = j;
		!(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
		for (var e; c.length && (e = c.shift());)!c.length && k(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
	}
	function n(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.M = b.prototype;
		a.prototype = new c
	};

	function o(a, b) {
		for (var c in a) if (a[c] == b) return f;
		return i
	};
	var s = {};
	m("sb.NodeType", s);
	s.UnspecifiedEntity = "unspecified entity";
	s.SimpleChemical = "simple chemical";
	s.Macromolecule = "macromolecule";
	s.NucleicAcidFeature = "nucleic acid feature";
	s.SimpleChemicalMultimer = "simple chemical multimer";
	s.MacromoleculeMultimer = "macromolecule multimer";
	s.NucleicAcidFeatureMultimer = "nucleic acid feature multimer";
	s.Complex = "complex";
	s.ComplexMultimer = "complex multimer";
	s.SourceAndSink = "source and sink";
	s.Perturbation = "perturbation";
	s.BiologicalActivity = "biological activity";
	s.PerturbingAgent = "perturbing agent";
	s.Compartment = "compartment";
	s.Submap = "submap";
	s.Tag = "tag";
	s.Terminal = "terminal";
	s.Process = "process";
	s.OmittedProcess = "omitted process";
	s.UncertainProcess = "uncertain process";
	s.Association = "association";
	s.Dissociation = "dissociation";
	s.Phenotype = "phenotype";
	s.And = "and";
	s.Or = "or";
	s.Not = "not";
	s.StateVariable = "state variable";
	s.UnitOfInformation = "unit of information";
	s.Stoichiometry = "stoichiometry";
	s.Entity = "entity";
	s.Outcome = "outcome";
	s.Observable = "observable";
	s.Interaction = "interaction";
	s.InfluenceTarget = "influence target";
	s.Annotation = "annotation";
	s.VariableValue = "variable value";
	s.ImplicitXor = "implicit xor";
	s.Delay = "delay";
	s.Existence = "existence";
	s.Location = "location";
	s.Cardinality = "cardinality";

	function ba(a) {
		return o(s, a)
	}
	m("sb.NodeTypeHelper.isNodeTypeSupported", ba);

	function ca(a) {
		for (var b = 0, c = ("" + t).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), a = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = Math.max(c.length, a.length), e = 0; 0 == b && e < d; e++) {
			var g = c[e] || "",
				O = a[e] || "",
				p = RegExp("(\\d*)(\\D*)", "g"),
				v = RegExp("(\\d*)(\\D*)", "g");
			do {
				var q = p.exec(g) || ["", "", ""],
					r = v.exec(O) || ["", "", ""];
				if (0 == q[0].length && 0 == r[0].length) break;
				b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == r[2].length) ? -1 : (0 == q[2].length) > (0 == r[2].length) ? 1 : 0) || (q[2] < r[2] ? -1 : q[2] > r[2] ? 1 : 0)
			} while (0 == b)
		}
		return b
	};
	var u = Array.prototype,
		da = u.indexOf ? function (a, b, c) {
			return u.indexOf.call(a, b, c)
		} : function (a, b, c) {
			c = c == h ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
			if (l(a)) return !l(b) || 1 != b.length ? -1 : a.indexOf(b, c);
			for (; c < a.length; c++) if (c in a && a[c] === b) return c;
			return -1
		}, w = u.forEach ? function (a, b, c) {
			u.forEach.call(a, b, c)
		} : function (a, b, c) {
			for (var d = a.length, e = l(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
		}, x = u.filter ? function (a, b, c) {
			return u.filter.call(a, b, c)
		} : function (a, b, c) {
			for (var d = a.length, e = [], g = 0, O = l(a) ? a.split("") : a, p = 0; p < d; p++) if (p in O) {
				var v = O[p];
				b.call(c, v, p, a) && (e[g++] = v)
			}
			return e
		};

	function ea(a, b) {
		return 0 <= da(a, b)
	}
	function y(a, b) {
		ea(a, b) || a.push(b)
	};

	function z(a, b) {
		this.g = {};
		this.c = [];
		var c = arguments.length;
		if (1 < c) {
			if (c % 2) throw Error("Uneven number of arguments");
			for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
		} else if (a) {
			var e;
			if (a instanceof z) {
				A(a);
				d = a.c.concat();
				A(a);
				e = [];
				for (c = 0; c < a.c.length; c++) e.push(a.g[a.c[c]])
			} else {
				var c = [],
					g = 0;
				for (d in a) c[g++] = d;
				d = c;
				c = [];
				g = 0;
				for (e in a) c[g++] = a[e];
				e = c
			}
			for (c = 0; c < d.length; c++) this.set(d[c], e[c])
		}
	}
	z.prototype.k = 0;
	z.prototype.remove = function (a) {
		return Object.prototype.hasOwnProperty.call(this.g, a) ? (delete this.g[a], this.k--, this.c.length > 2 * this.k && A(this), f) : i
	};

	function A(a) {
		if (a.k != a.c.length) {
			for (var b = 0, c = 0; b < a.c.length;) {
				var d = a.c[b];
				Object.prototype.hasOwnProperty.call(a.g, d) && (a.c[c++] = d);
				b++
			}
			a.c.length = c
		}
		if (a.k != a.c.length) {
			for (var e = {}, c = b = 0; b < a.c.length;) d = a.c[b], Object.prototype.hasOwnProperty.call(e, d) || (a.c[c++] = d, e[d] = 1), b++;
			a.c.length = c
		}
	}
	z.prototype.get = function (a, b) {
		return Object.prototype.hasOwnProperty.call(this.g, a) ? this.g[a] : b
	};
	z.prototype.set = function (a, b) {
		Object.prototype.hasOwnProperty.call(this.g, a) || (this.k++, this.c.push(a));
		this.g[a] = b
	};
	z.prototype.r = function () {
		return new z(this)
	};

	function B() {
		this.i = new z
	}
	m("sb.model.AttributeObject", B);
	B.prototype.b = function (a, b, c) {
		if (k(b)) {
			var d = this.i.get(a);
			this.i.set(a, b);
			c && "id" == a && (d && c.s.remove(d), c.s.set(b, this));
			return this
		}
		return this.i.get(a)
	};
	B.prototype.attr = B.prototype.b;

	function C(a) {
		this.i = new z;
		this.a = a;
		this.q = [];
		this.parent = h
	}
	n(C, B);
	m("sb.model.Element", C);
	C.prototype.id = function (a) {
		if (k(a)) {
			var b = this.a.element(a);
			if (b && b != this) throw Error("Given element id " + a + " already existed");
		}
		return this.b("id", a, this.a)
	};
	C.prototype.id = C.prototype.id;
	C.prototype.d = function (a) {
		a.parent && a.parent.removeChild(a);
		y(this.q, a);
		a.parent = this
	};
	C.prototype.addChild = C.prototype.d;
	C.prototype.removeChild = function (a) {
		var b = this.q,
			c = da(b, a);
		0 <= c && u.splice.call(b, c, 1);
		a.parent = h
	};
	C.prototype.removeChild = C.prototype.removeChild;
	C.prototype.children = function () {
		return this.q
	};
	C.prototype.children = C.prototype.children;

	function D(a) {
		C.call(this, a)
	}
	n(D, C);
	m("sb.Port", D);

	function E(a) {
		C.call(this, a)
	}
	n(E, C);
	m("sb.Node", E);
	E.prototype.type = function (a) {
		if (k(a) && !ba(a)) throw Error("Given node type " + a + " is not supported.");
		return this.b("type", a)
	};
	E.prototype.type = E.prototype.type;
	E.prototype.label = function (a) {
		return this.b("label", a)
	};
	E.prototype.label = E.prototype.label;
	E.prototype.r = function (a) {
		return this.b("clone", a)
	};
	E.prototype.clone = E.prototype.r;
	E.prototype.u = function (a) {
		a = this.a.createNode(a);
		this.d(a);
		return a
	};
	E.prototype.createSubNode = E.prototype.u;
	E.prototype.f = function (a) {
		a = this.a.f(a);
		this.d(a);
		return a
	};
	E.prototype.createPort = E.prototype.f;
	var F = {};
	m("sb.ArcType", F);
	F.Production = "production";
	F.Consumption = "consumption";
	F.Catalysis = "catalysis";
	F.Modulation = "modulation";
	F.Stimulation = "stimulation";
	F.Inhibition = "inhibition";
	F.Assignment = "assignment";
	F.Interaction = "interaction";
	F.AbsoluteInhibition = "absolute inhibition";
	F.AbsoluteStimulation = "absolute stimulation";
	F.PositiveInfluence = "positive influence";
	F.NegativeInfluence = "negative influence";
	F.UnknownInfluence = "unknown influence";
	F.EquivalenceArc = "equivalence arc";
	F.NecessaryStimulation = "necessary stimulation";
	F.LogicArc = "logic arc";

	function fa(a) {
		return o(F, a)
	}
	m("sb.ArcTypeHelper.isArcTypeSupported", fa);

	function G(a) {
		C.call(this, a)
	}
	n(G, C);
	m("sb.Arc", G);
	G.prototype.type = function (a) {
		if (k(a) && !fa(a)) throw Error("Given arc type " + a + " is not supported.");
		return this.b("type", a)
	};
	G.prototype.type = G.prototype.type;
	G.prototype.source = function (a) {
		if (a && l(a)) {
			var b = this.a.element(a);
			if (!b) throw Error("Element " + a + " do not exist.");
			a = b
		}
		return this.b("source", a)
	};
	G.prototype.source = G.prototype.source;
	G.prototype.target = function (a) {
		if (a && l(a)) {
			var b = this.a.element(a);
			if (!b) throw Error("Element " + a + " do not exist.");
			a = b
		}
		return this.b("target", a)
	};
	G.prototype.target = G.prototype.target;
	G.prototype.f = function (a) {
		a = this.a.f(a);
		this.d(a);
		return a
	};
	G.prototype.createPort = G.prototype.f;

	function ga(a) {
		C.call(this, a)
	}
	n(ga, C);
	m("sb.ArcGroup", ga);

	function H(a) {
		this.i = new z;
		this.id = a;
		this.H = this.A = this.G = 1;
		this.s = new z;
		this.t = [];
		this.p = [];
		this.I = []
	}
	n(H, B);
	m("sb.Document", H);
	H.prototype.createNode = function (a) {
		a = a ? a : ha(this);
		a = (new E(this)).id(a);
		y(this.t, a);
		return a
	};
	H.prototype.createNode = H.prototype.createNode;

	function ha(a) {
		var b = "node" + a.G++;
		return a.element(b) ? ha(a) : b
	}
	H.prototype.w = function (a) {
		return a ? x(this.t, function (a) {
			return a.parent ? i : f
		}) : this.t
	};
	H.prototype.nodes = H.prototype.w;
	H.prototype.v = function (a) {
		a = this.element(a);
		return a instanceof E ? a : h
	};
	H.prototype.node = H.prototype.v;
	H.prototype.element = function (a) {
		return this.s.get(a)
	};
	H.prototype.e = function (a) {
		a = a ? a : ia(this);
		a = (new G(this)).id(a);
		y(this.p, a);
		return a
	};
	H.prototype.createArc = H.prototype.e;
	H.prototype.D = function (a, b) {
		var c = this.e();
		c.source(a).target(b);
		return c
	};
	H.prototype.connect = H.prototype.D;

	function ia(a) {
		var b = "arc" + a.A++;
		return a.element(b) ? ia(a) : b
	}
	H.prototype.B = function () {
		return this.p
	};
	H.prototype.arcs = H.prototype.B;
	H.prototype.arc = function (a) {
		a = this.element(a);
		return a instanceof G ? a : h
	};
	H.prototype.arc = H.prototype.arc;

	function ja(a) {
		var b = "port" + a.H++;
		return a.element(b) ? ja(a) : b
	}
	H.prototype.f = function (a) {
		a = a ? a : ja(this);
		a = (new D(this)).id(a);
		y(this.I, a);
		return a
	};
	H.prototype.createPort = H.prototype.f;
	H.prototype.lang = function (a) {
		if (k(a) && !o(ka, a)) throw Error("Given SBGN language type " + a + " is not supported.");
		return this.b("language", a)
	};
	var ka = {
		J: "activity flow",
		K: "entity relationship",
		L: "process description"
	};
	m("sb.Language", ka);

	function la(a, b) {
		this.x = k(a) ? a : 0;
		this.y = k(b) ? b : 0
	}
	m("sb.Point", la);

	function I(a, b, c, d) {
		this.x = k(a) ? a : 0;
		this.y = k(b) ? b : 0;
		this.width = k(c) ? c : 0;
		this.height = k(d) ? d : 0
	}
	m("sb.Box", I);
	I.prototype.contains = function (a) {
		return a.x >= this.x && a.y >= this.y && this.x + this.width >= a.x + a.width && this.y + this.height >= a.y + a.height
	};
	var J, K, L, M;

	function ma() {
		return j.navigator ? j.navigator.userAgent : h
	}
	M = L = K = J = i;
	var N;
	if (N = ma()) {
		var na = j.navigator;
		J = 0 == N.indexOf("Opera");
		K = !J && -1 != N.indexOf("MSIE");
		L = !J && -1 != N.indexOf("WebKit");
		M = !J && !L && "Gecko" == na.product
	}
	var P = K,
		oa = M,
		pa = L,
		t;
	a: {
		var Q = "",
			R;
		if (J && j.opera) var qa = j.opera.version,
			Q = "function" == typeof qa ? qa() : qa;
		else if (oa ? R = /rv\:([^\);]+)(\)|;)/ : P ? R = /MSIE\s+([^\);]+)(\)|;)/ : pa && (R = /WebKit\/(\S+)/), R) var ra = R.exec(ma()),
			Q = ra ? ra[1] : "";
		if (P) {
			var sa, ta = j.document;
			sa = ta ? ta.documentMode : void 0;
			if (sa > parseFloat(Q)) {
				t = "" + sa;
				break a
			}
		}
		t = Q
	}
	var S = {}, ua = {};

	function va() {
		return ua[9] || (ua[9] = P && !! document.documentMode && 9 <= document.documentMode)
	};
	!P || va();
	var wa = !oa && !P || P && va() || oa && (S["1.9.1"] || (S["1.9.1"] = 0 <= ca("1.9.1")));
	P && (S["9"] || (S["9"] = 0 <= ca("9")));

	function xa(a) {
		return wa && void 0 != a.children ? a.children : x(a.childNodes, function (a) {
			return 1 == a.nodeType
		})
	};

	function ya(a) {
		if ("undefined" != typeof XMLSerializer) return (new XMLSerializer).serializeToString(a);
		if (a = a.xml) return a;
		throw Error("Your browser does not support serializing XML documents");
	};

	function za() {}

	function Aa(a) {
		"\ufeff" == a.charAt(0) && (a = a.substr(1, a.length));
		new z;
		if ("undefined" != typeof DOMParser) a = (new DOMParser).parseFromString(a, "application/xml");
		else if ("undefined" != typeof ActiveXObject) {
			var b = new ActiveXObject("MSXML2.DOMDocument");
			if (b) {
				b.resolveExternals = i;
				b.validateOnParse = i;
				try {
					b.setProperty("ProhibitDTD", f), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256)
				} catch (c) {}
			}
			b.loadXML(a);
			a = b
		} else throw Error("Your browser does not support loading xml documents");
		return a
	}

	function Ba(a, b) {
		Ca(a, b);
		w(b.childNodes, function (a) {
			1 == a.nodeType && Ba(this, a)
		}, a);
		Da(a, b)
	};

	function Ea() {
		this.m = []
	}
	Ea.prototype.push = function (a) {
		this.m.push(a)
	};
	Ea.prototype.pop = function () {
		return this.m.pop()
	};

	function T() {
		this.j = this.a = this.l = this.h = h
	}
	n(T, za);
	m("sb.io.SbgnReader", T);
	T.prototype.n = function (a) {
		this.h = new Ea;
		this.a = new H;
		this.j = [];
		this.l = [];
		Ba(this, Aa(a).documentElement);
		w(this.l, function (a) {
			var c = this.a.arc(a.getAttribute("id")),
				d = a.getAttribute("target"),
				a = a.getAttribute("source");
			c.source(a).target(d)
		}, this);
		return this.a
	};
	T.prototype.parseText = T.prototype.n;

	function Ca(a, b) {
		var c = b.tagName,
			c = c ? c.toLocaleLowerCase() : h,
			d = b.getAttribute("id"),
			e = a.h.m[a.h.m.length - 1];
		if ("glyph" == c) d = e instanceof E ? e.u(d) : a.a.createNode(d), c = b.getAttribute("class"), d.type(c), a.h.push(d), "compartment" == c && y(a.j, d);
		else if ("port" == c)(e instanceof E || e instanceof G) && e.f(d);
		else if ("arc" == c) c = a.a.e(d), d || b.setAttribute("id", c.id()), d = b.getAttribute("class"), c.type(d), a.h.push(c), y(a.l, b);
		else if ("label" == c) e.label(b.getAttribute("text"));
		else if ("bbox" == c) {
			var g = new I(Number(b.getAttribute("x")),
			Number(b.getAttribute("y")), Number(b.getAttribute("w")), Number(b.getAttribute("h")));
			"label" == b.parentNode.tagName.toLocaleLowerCase() ? e.b("label.pos", g) : (e.b("box", g), e instanceof E && "compartment" != e.type() && w(a.j, function (a) {
				a.b("box").contains(g) && a.d(e)
			}, a))
		} else "start" == c || "end" == c ? e instanceof G && e.b(c, new la(Number(b.getAttribute("x")), Number(b.getAttribute("y")))) : "map" == c ? ((d = b.getAttribute("language")) && a.a.lang(d), a.h.push(a.a)) : "entity" == c && e.b("entity", b.getAttribute("name"))
	}

	function Da(a, b) {
		var c = b.tagName;
		("glyph" == c || "arc" == c || "map" == c) && a.h.pop()
	};

	function U(a, b, c) {
		this.url = a;
		this.C = c;
		this.F = Fa(this);
		c = document.createElement("script");
		c.setAttribute("type", "text/javascript");
		var d = "",
			b = b || {}, e;
		for (e in b) b.hasOwnProperty(e) && (d += encodeURIComponent(e) + "=" + encodeURIComponent(b[e]) + "&");
		c.setAttribute("src", a + "?" + d + "callback=sb.io.Jsonp." + this.F);
		this.z = document.getElementsByTagName("head")[0].appendChild(c)
	}
	m("sb.io.Jsonp", U);
	U.call = function (a, b, c) {
		new U(a, b, c)
	};

	function Fa(a) {
		for (var b = "", c = 0; 15 > c; c++) b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.floor(52 * Math.random()));
		U[b] = function (c) {
			a.C(c);
			delete U[b];
			a.z.parentNode.removeChild(a.z)
		};
		return b
	};
	var V = {};
	m("sb.sbo.NodeTypeMapping", V);
	V["unspecified entity"] = 285;
	V.compartment = 290;
	V.macromolecule = 245;
	V["macromolecule multimer"] = 420;
	V["simple chemical"] = 247;
	V["simple chemical multimer"] = 421;
	V.complex = 253;
	V["complex multimer"] = 418;
	V.process = 375;
	V["omitted process"] = 379;
	V["uncertain process"] = 396;
	V.annotation = 110003;
	V.phenotype = 358;
	V["nucleic acid feature"] = 250;
	V["nucleic acid feature multimer"] = 250;
	V.association = 177;
	V.dissociation = 180;
	V.entity = 245;
	V.submap = 395;
	V.terminal = 110004;
	V["perturbing agent"] = 405;
	V["variable value"] = 110001;
	V["implicit xor"] = -1;
	V.tag = 110002;
	V.and = 173;
	V.or = 174;
	V.not = 238;
	V.delay = 225;
	V["source and sink"] = 291;
	V.perturbation = 405;
	V["biological activity"] = 412;
	var W = {};
	m("sb.sbo.ArcTypeMapping", W);
	W.production = 393;
	W["equivalence arc"] = 15;
	W["logic arc"] = 15;
	W["necessary stimulation"] = 461;
	W.assignment = 464;
	W.interaction = 342;
	W["absolute inhibition"] = 407;
	W.modulation = 168;
	W.inhibition = 169;
	W["absolute stimulation"] = 411;
	W["unknown influence"] = 168;
	W["positive influence"] = 170;
	W["negative influence"] = 169;
	W.stimulation = 170;
	W.catalysis = 172;
	W.consumption = 15;
	W.production = 393;
	W.catalysis = 13;

	function Ga() {
		this.o = void 0
	}
	function Ha(a) {
		var b = [];
		Ia(new Ga, a, b);
		return b.join("")
	}

	function Ia(a, b, c) {
		switch (typeof b) {
			case "string":
				Ja(b, c);
				break;
			case "number":
				c.push(isFinite(b) && !isNaN(b) ? b : "null");
				break;
			case "boolean":
				c.push(b);
				break;
			case "undefined":
				c.push("null");
				break;
			case "object":
				if (b == h) {
					c.push("null");
					break
				}
				if ("array" == aa(b)) {
					var d = b.length;
					c.push("[");
					for (var e = "", g = 0; g < d; g++) c.push(e), e = b[g], Ia(a, a.o ? a.o.call(b, "" + g, e) : e, c), e = ",";
					c.push("]");
					break
				}
				c.push("{");
				d = "";
				for (g in b) Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), Ja(g, c),
				c.push(":"), Ia(a, a.o ? a.o.call(b, g, e) : e, c), d = ","));
				c.push("}");
				break;
			case "function":
				break;
			default:
				throw Error("Unknown type: " + typeof b);
		}
	}
	var Ka = {
		'"': '\\"',
		"\\": "\\\\",
		"/": "\\/",
		"\u0008": "\\b",
		"\u000c": "\\f",
		"\n": "\\n",
		"\r": "\\r",
		"\t": "\\t",
		"\x0B": "\\u000b"
	}, La = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

	function Ja(a, b) {
		b.push('"', a.replace(La, function (a) {
			if (a in Ka) return Ka[a];
			var b = a.charCodeAt(0),
				e = "\\u";
			16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
			return Ka[a] = e + b.toString(16)
		}), '"')
	};

	function Ma() {}
	m("sb.io.JsbgnWriter", Ma);
	var X = [];
	X["entity relationship"] = "ER";
	X["activity flow"] = "AF";
	X["process description"] = "PD";
	Ma.prototype.write = function (a) {
		var b = {
			nodes: [],
			edges: []
		};
		a.lang() && (b.sbgnlang = X[a.lang()]);
		w(a.w(), function (a) {
			if (!(a instanceof D) && !ea(["unit of information", "state variable"], a.type())) {
				var d = {};
				d.id = a.id();
				d.sbo = V[a.type()];
				d.is_abstract = i;
				var e = {};
				d.data = e;
				a.r() && (e.clone = f);
				a.label() && (e.label = a.label());
				var g = a.b("box");
				g && (e.x = g.x, e.y = g.y, e.width = g.width, e.height = g.height);
				w(a.children(), function (a) {
					if (!(a instanceof D)) if (a.type() == "unit of information") {
						e.unitofinformation || (e.unitofinformation = []);
						y(e.unitofinformation, a.label() ? a.label() : "")
					} else if (a.type() != "state variable") {
						e.subnodes || (e.subnodes = []);
						y(e.subnodes, a.id())
					}
				}, this);
				y(b.nodes, d)
			}
		}, this);
		w(a.p, function (a) {
			var d = {};
			d.id = a.id();
			d.sbo = W[a.type()];
			d.source = a.source().id();
			d.target = a.target().id();
			d.data = {};
			y(b.edges, d)
		}, this);
		return Ha(b)
	};

	function Y(a, b, c) {
		a = xa(a);
		w(a, b, c)
	}
	function Z(a, b, c, d) {
		a = x(xa(a), function (a) {
			return a.tagName == b
		});
		w(a, c, d)
	};

	function $() {
		this.j = this.a = this.l = this.h = h
	}
	n($, za);
	m("sb.io.SbmlReader", $);
	$.prototype.n = function (a) {
		this.a = new H;
		this.j = [];
		this.l = [];
		var a = Aa(a),
			b = {};
		Z(a.documentElement, "model", function (a) {
			Z(a, "listOfCompartments", function (a) {
				Y(a, function (a) {
					this.a.createNode(a.getAttribute("id")).type("compartment")
				}, this)
			}, this);
			Z(a, "listOfSpecies", function (a) {
				Y(a, function (a) {
					var c = this.a.createNode(a.getAttribute("id")),
						d = a.getAttribute("id"),
						p = a.getAttribute("id") + a.getAttribute("name"),
						v = this.a.v(a.getAttribute("compartment"));
					v.d(c);
					b[d] = v; - 1 != p.toLowerCase().indexOf("sink") || -1 != p.toLowerCase().indexOf("emptyset") ? c.type("source and sink") : -1 != p.toLowerCase().indexOf("dna") || -1 != p.toLowerCase().indexOf("rna") ? c.type("nucleic acid feature") : -1 != ya(a).indexOf("urn:miriam:obo.chebi") ? c.type("simple chemical") : -1 != ya(a).indexOf("urn:miriam:pubchem") ? c.type("simple chemical") : -1 != ya(a).indexOf("urn:miriam:uniprot") ? c.type("macromolecule") : c.type("unspecified entity")
				}, this)
			}, this);
			Z(a, "listOfReactions", function (a) {
				Z(a, "reaction", function (a) {
					var c = a.getAttribute("id"),
						d = this.a.createNode(c).type("process");
					console.log("reaction_id " + c);
					var p = i,
						v = i,
						q;
					Z(a, "listOfReactants", function (a) {
						Y(a, function (a) {
							a = a.getAttribute("species");
							this.a.e(a + "_to_" + c).source(a).target(c).type("consumption");
							p = f;
							q = b[a]
						}, this)
					}, this);
					Z(a, "listOfProducts", function (a) {
						Y(a, function (a) {
							a = a.getAttribute("species");
							this.a.e(c + "_to_" + a).source(c).target(a).type("production");
							v = f;
							q = b[a]
						}, this)
					}, this);
					Z(a, "listOfModifiers", function (a) {
						Y(a, function (a) {
							a = a.getAttribute("species");
							this.a.e(a + "_to_" + c).source(a).target(c).type("modulation")
						},
						this)
					}, this);
					q.d(d);
					if (!p) {
						var a = c + "_source",
							r = this.a.createNode(a).type("source and sink"),
							d = c;
						q.d(r);
						this.a.e(a + "_to_" + d).source(a).target(d).type("consumption")
					}
					v || (d = c + "_sink", r = this.a.createNode(d).type("source and sink"), a = c, q.d(r), this.a.e(a + "_to_" + d).source(a).target(d).type("production"))
				}, this)
			}, this)
		}, this);
		return this.a
	};
	$.prototype.parseText = $.prototype.n;

	function Na(a, b) {
		var c;
		if ("sbgn" == b) c = new T;
		else throw Error("Format " + b + " not supported");
		return c.n(a)
	}
	m("sb.io.read", Na);
	m("sb.io.readUrl", function (a, b, c) {
		new U("http://chemhack.com/jsonp/ba-simple-proxy.php", {
			url: a
		}, function (a) {
			200 == a.status.http_code && (a = Na(a.contents, b), c(a))
		})
	});
	m("sb.io.write", function (a, b) {
		var c;
		if ("jsbgn" == b) c = new Ma;
		else throw Error("Format " + b + " not supported");
		return c.write(a)
	});
})();