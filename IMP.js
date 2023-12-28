function Fx1(DOM_el) {
  this.DOM = {
    el: null,
    bottom: null,
    top: null
  };

  this.DOM.el = DOM_el;
  this.layout();
}

Fx1.prototype.layout = function () {
  // get element background-image url

  var match = getComputedStyle(this.DOM.el).backgroundImage.match(
    /url\(["']?([^"']*)["']?\)/
  );
  var url = match ? match[1] : null;

  console.log(url);
  gsap.set(this.DOM.el, { backgroundImage: "none" });

  var iterations = 2;
  var innerHTML = "";
  for (var i = 0; i < iterations; ++i) {
    innerHTML +=
      '<div class="double__img" style="background-image:url(' +
      url +
      ')"></div>';
  }
  this.DOM.el.innerHTML = innerHTML;

  this.DOM.bottom = this.DOM.el.querySelector(".double__img:first-child");
  this.DOM.top = this.DOM.el.querySelector(".double__img:last-child");

  gsap.set(this.DOM.bottom, {
    scale: 1.15
  });
};

Fx1.prototype.mouseenter = function () {
  if (this.leaveTimeout) {
    this.leaveTimeout.kill();
  }

  this.enterTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.7,
        ease: "power3.inOut"
      }
    })
    .set(this.DOM.bottom, { willChange: "filter" })
    .set(this.DOM.top, { willChange: "clip-path" })
    .fromTo(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      },
      0
    )
    .fromTo(
      this.DOM.bottom,
      {
        filter: "brightness(400%) saturate(200%) hue-rotate(190deg)"
      },
      {
        filter: "brightness(100%) saturate(100%) hue-rotate(0deg)"
      },
      0
    );
};

Fx1.prototype.mouseleave = function () {
  if (this.enterTimeout) {
    this.enterTimeout.kill();
  }

  this.leaveTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.7,
        ease: "power3.inOut"
      }
    })
    .set(this.DOM.bottom, { willChange: "filter" })
    .set(this.DOM.top, { willChange: "clip-path" })
    .to(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    )
    .to(
      this.DOM.bottom,
      {
        filter: "brightness(400%) saturate(200%) hue-rotate(190deg)"
      },
      0
    );
};

// FX2

function Fx2(DOM_el) {
  this.DOM = {
    el: null
  };
  this.DOM.el = DOM_el;
  this.layout();
}

Fx2.prototype.layout = function () {
  // get element background-image url
  const url = getComputedStyle(this.DOM.el).backgroundImage.match(
    /url\(["']?([^"']*)["']?\)/
  )[1];
  gsap.set(this.DOM.el, { backgroundImage: "none" });

  const iterations = 2;
  let innerHTML = "";
  for (let i = 0; i < iterations; ++i) {
    innerHTML +=
      '<div class="double__img" style="background-image:url(' +
      url +
      ')"></div>';
  }
  this.DOM.el.innerHTML = innerHTML;

  this.DOM.bottom = this.DOM.el.querySelector(".double__img:first-child");
  this.DOM.top = this.DOM.el.querySelector(".double__img:last-child");
};

Fx2.prototype.mouseenter = function () {
  if (this.leaveTimeout) {
    this.leaveTimeout.kill();
  }

  this.enterTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.6,
        ease: "power3"
      }
    })
    .set(this.DOM.top, { willChange: "clip-path" })
    .fromTo(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
      },
      0
    )

    .fromTo(
      this.DOM.bottom,
      {
        scale: 1,
        filter: "brightness(400%) hue-rotate(-190deg)"
      },
      {
        scale: 1.3,
        filter: "brightness(100%) hue-rotate(0deg)"
      },
      0
    );
};

Fx2.prototype.mouseleave = function () {
  if (this.enterTimeout) {
    this.enterTimeout.kill();
  }

  this.leaveTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.6,
        ease: "power3.inOut"
      }
    })
    .set(this.DOM.top, { willChange: "clip-path" })
    .to(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    );
};

// Fx3

function Fx3(DOM_el) {
  this.DOM = {
    el: null
  };
  this.DOM.el = DOM_el;
  this.layout();
}

Fx3.prototype.layout = function () {
  // get element background-image url
  const url = getComputedStyle(this.DOM.el).backgroundImage.match(
    /url\(["']?([^"']*)["']?\)/
  )[1];
  gsap.set(this.DOM.el, { backgroundImage: "none" });

  const iterations = 2;
  let innerHTML = "";
  for (let i = 0; i < iterations; ++i) {
    innerHTML +=
      '<div class="double__img" style="background-image:url(' +
      url +
      ')"></div>';
  }
  this.DOM.el.innerHTML = innerHTML;

  this.DOM.bottom = this.DOM.el.querySelector(".double__img:first-child");
  this.DOM.top = this.DOM.el.querySelector(".double__img:last-child");

  gsap.set(this.DOM.bottom, {
    scaleX: -0.97,
    scaleY: 0.97,
    filter: "saturate(200%)"
  });
};

Fx3.prototype.mouseenter = function () {
  if (this.leaveTimeout) {
    this.leaveTimeout.kill();
  }

  this.enterTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.8,
        ease: "steps(6)"
      }
    })
    .set(this.DOM.top, { willChange: "clip-path" })
    .fromTo(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
      },
      0
    );
};

Fx3.prototype.mouseleave = function () {
  if (this.enterTimeout) {
    this.enterTimeout.kill();
  }

  this.leaveTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.8,
        ease: "steps(6)"
      }
    })
    .set(this.DOM.top, { willChange: "clip-path" })
    .to(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    );
};

var DoubleImageEffect = function (DOM_el) {
  this.DOM = {
    el: null
  };
  this.effects = {
    1: "Fx1",
    2: "Fx2",
    3: "Fx3",
    4: "Fx4",
    5: "Fx5",
    6: "Fx6",
    7: "Fx7",
    8: "Fx8",
    9: "Fx9",
    10: "Fx10"
  };

  this.DOM.el = DOM_el;
  this.effectName = this.effects[this.DOM.el.dataset.effect];
  if (!this.effectName) {
    this.effectName = "Fx1";
  }
  this.effect = new window[this.effectName](this.DOM.el);
  this.initEvents();
};

// Fx4

function Fx4(DOM_el) {
  this.DOM = {
    el: null
  };
  this.DOM.el = DOM_el;
  this.layout();
}

Fx4.prototype.layout = function () {
  // get element background-image url
  const url = getComputedStyle(this.DOM.el).backgroundImage.match(
    /url\(["']?([^"']*)["']?\)/
  )[1];
  gsap.set(this.DOM.el, { backgroundImage: "none" });

  const iterations = 3;
  let innerHTML = "";
  for (let i = 0; i < iterations; ++i) {
    innerHTML +=
      '<div class="double__img" style="background-image:url(' +
      url +
      ')"></div>';
  }
  this.DOM.el.innerHTML = innerHTML;

  this.DOM.bottom = this.DOM.el.querySelector(".double__img:first-child");
  this.DOM.middle = this.DOM.el.querySelector(".double__img:nth-child(2)");
  this.DOM.top = this.DOM.el.querySelector(".double__img:last-child");

  gsap.set(this.DOM.middle, {
    scale: 0.97,
    filter: "saturate(400%) blur(5px)"
  });

  gsap.set(this.DOM.bottom, {
    scale: 0.94
  });
};

Fx4.prototype.mouseenter = function () {
  if (this.leaveTimeout) {
    this.leaveTimeout.kill();
  }
  const DURATION = 0.25;
  this.enterTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.8,
        ease: "none"
      }
    })
    .addLabel("start", 0)
    .set([this.DOM.top, this.DOM.middle], { willChange: "clip-path" })
    .fromTo(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
      },
      "start"
    )
    .fromTo(
      this.DOM.middle,
      {
        xPercent: 0
      },
      {
        duration: DURATION,
        ease: "elastic.inOut(5)",
        xPercent: -3,
        repeat: 1
      },
      "start"
    )
    .fromTo(
      this.DOM.middle,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
      },
      `start+=${DURATION * 0.7}`
    )
    .fromTo(
      this.DOM.bottom,
      {
        xPercent: 0,
        yPercent: 0
      },
      {
        duration: DURATION,
        ease: "elastic.inOut(5)",
        xPercent: 1,
        yPercent: -1,
        repeat: 1
      },
      `start+=${DURATION * 0.7}`
    );
};

Fx4.prototype.mouseleave = function () {
  if (this.enterTimeout) {
    this.enterTimeout.kill();
  }

  this.leaveTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.4,
        ease: "none"
      }
    })
    .set(this.DOM.top, { willChange: "clip-path" })
    .to(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    );
};

// Fx5

function Fx5(DOM_el) {
  this.DOM = {
    el: null,
    bottom: null,
    top: null
  };
  this.DOM.el = DOM_el;
  this.layout();
}

Fx5.prototype.layout = function () {
  // get element background-image url
  const url = getComputedStyle(this.DOM.el).backgroundImage.match(
    /url\(["']?([^"']*)["']?\)/
  )[1];
  gsap.set(this.DOM.el, { backgroundImage: "none" });

  const iterations = 2;
  let innerHTML = "";
  for (let i = 0; i < iterations; ++i) {
    innerHTML +=
      '<div class="double__img" style="background-image:url(' +
      url +
      ')"></div>';
  }
  this.DOM.el.innerHTML = innerHTML;

  this.DOM.bottom = this.DOM.el.querySelector(".double__img:first-child");
  this.DOM.top = this.DOM.el.querySelector(".double__img:last-child");
};

Fx5.prototype.mouseenter = function () {
  if (this.leaveTimeout) {
    this.leaveTimeout.kill();
  }

  this.enterTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.5,
        ease: "power2"
      }
    })
    .set(this.DOM.bottom, { willChange: "filter" })
    .set(this.DOM.top, { willChange: "clip-path" })
    .fromTo(
      this.DOM.top,
      {
        clipPath: "circle(70.7% at 50% 50%)"
      },
      {
        clipPath: "circle(0% at 50% 50%)"
      },
      0
    )

    .fromTo(
      this.DOM.bottom,
      {
        scale: 1.5,
        filter: "brightness(400%) saturate(200%) hue-rotate(190deg)"
      },
      {
        scale: 1.3,
        filter: "brightness(100%) saturate(100%) hue-rotate(0deg)"
      },
      0
    );
};

Fx5.prototype.mouseleave = function () {
  if (this.enterTimeout) {
    this.enterTimeout.kill();
  }

  this.leaveTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.5,
        ease: "power2.inOut"
      }
    })
    .set(this.DOM.bottom, { willChange: "filter" })
    .set(this.DOM.top, { willChange: "clip-path" })
    .to(
      this.DOM.top,
      {
        clipPath: "circle(70.7% at 50% 50%)"
      },
      0
    )

    .to(
      this.DOM.bottom,
      {
        scale: 1.5,
        filter: "brightness(400%) saturate(200%) hue-rotate(190deg)"
      },
      0
    );
};

// FX6

function Fx6(DOM_el) {
  this.DOM = {
    el: null,
    bottom: null,
    top: null
  };
  this.DOM.el = DOM_el;
  this.layout();
}

Fx6.prototype.layout = function () {
  // get element background-image url
  const url = getComputedStyle(this.DOM.el).backgroundImage.match(
    /url\(["']?([^"']*)["']?\)/
  )[1];
  gsap.set(this.DOM.el, { backgroundImage: "none" });

  const iterations = 2;
  let innerHTML = "";
  for (let i = 0; i < iterations; ++i) {
    innerHTML +=
      '<div class="double__img" style="background-image:url(' +
      url +
      ')"></div>';
  }
  this.DOM.el.innerHTML = innerHTML;

  this.DOM.bottom = this.DOM.el.querySelector(".double__img:first-child");
  this.DOM.top = this.DOM.el.querySelector(".double__img:last-child");

  /*
  gsap.set(this.DOM.bottom, {
      scale: 1.4
  });
  */
};

Fx6.prototype.mouseenter = function () {
  if (this.leaveTimeout) {
    this.leaveTimeout.kill();
  }

  this.enterTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.9,
        ease: "expo"
      }
    })
    .set(this.DOM.bottom, { willChange: "filter" })
    .set(this.DOM.top, { willChange: "clip-path" })
    .fromTo(
      this.DOM.top,
      {
        clipPath: "circle(70.7% at 50% 50%)"
      },
      {
        clipPath: "circle(0% at 50% 50%)"
      },
      0
    )

    .fromTo(
      this.DOM.bottom,
      {
        scale: 1,
        filter: "brightness(80%) contrast(200%) hue-rotate(-90deg)"
      },
      {
        scale: 1.3,
        filter: "brightness(100%) contrast(100%) hue-rotate(0deg)"
      },
      0
    );
};

Fx6.prototype.mouseleave = function () {
  if (this.enterTimeout) {
    this.enterTimeout.kill();
  }

  this.leaveTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.5,
        ease: "power2.inOut"
      }
    })
    .set(this.DOM.bottom, { willChange: "filter" })
    .set(this.DOM.top, { willChange: "clip-path" })
    .to(
      this.DOM.top,
      {
        clipPath: "circle(70.7% at 50% 50%)"
      },
      0
    )

    .to(
      this.DOM.bottom,
      {
        filter: "brightness(0%) contrast(400%)",
        scale: 3.3
      },
      0
    );
};

// Fx7

function Fx7(DOM_el) {
  this.DOM = {
    el: null,
    bottom: null,
    top: null
  };
  this.DOM.el = DOM_el;
  this.layout();
}

Fx7.prototype.layout = function () {
  // get element background-image url
  var url = getComputedStyle(this.DOM.el).backgroundImage.match(
    /url\(["']?([^"']*)["']?\)/
  )[1];
  gsap.set(this.DOM.el, { backgroundImage: "none" });

  var iterations = 2;
  var innerHTML = "";
  for (var i = 0; i < iterations; ++i) {
    innerHTML +=
      '<div class="double__img" style="background-image:url(' +
      url +
      ')"></div>';
  }
  this.DOM.el.innerHTML = innerHTML;

  this.DOM.bottom = this.DOM.el.querySelector(".double__img:first-child");
  this.DOM.top = this.DOM.el.querySelector(".double__img:last-child");
};

Fx7.prototype.mouseenter = function () {
  if (this.leaveTimeout) {
    this.leaveTimeout.kill();
  }

  this.enterTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.8,
        ease: "expo"
      }
    })
    .set(this.DOM.bottom, { willChange: "filter", transformOrigin: "50% 50%" })
    .set(this.DOM.top, { willChange: "clip-path" })
    .fromTo(
      this.DOM.top,
      {
        clipPath: "circle(141.2% at 100% 0%)"
      },
      {
        clipPath: "circle(0% at 100% 0%)"
      },
      0
    )

    .fromTo(
      this.DOM.bottom,
      {
        transformOrigin: "50% 100%",
        rotate: 3,
        filter: "brightness(0%) saturate(600%)"
      },
      {
        duration: 0.8,
        filter: "brightness(100%) saturate(100%)",
        rotate: 0,
        scale: 1.2
      },
      0
    );
};

Fx7.prototype.mouseleave = function () {
  if (this.enterTimeout) {
    this.enterTimeout.kill();
  }

  this.leaveTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.8,
        ease: "expo"
      }
    })
    .set(this.DOM.bottom, { willChange: "filter" })
    .set(this.DOM.top, { willChange: "clip-path" })
    .to(
      this.DOM.top,
      {
        clipPath: "circle(141.2% at 100% 0%)"
      },
      0
    )

    .to(
      this.DOM.bottom,
      {
        duration: 0.8,
        filter: "brightness(0%) saturate(200%)",
        scale: 1
      },
      0
    );
};

// Fx8

function Fx8(DOM_el) {
  this.DOM = {
    el: null,
    bottom: null,
    top: null
  };
  this.DOM.el = DOM_el;
  this.layout();
}

Fx8.prototype.layout = function () {
  /*
  this
  <div class="double" style="background-image:[url]"></div>
  becomes
  <div class="double">
      <div class="double__img" style="background-image:[url]"></div>
      <div class="double__img" style="background-image:[url]"></div>
  </div>
  */

  // get element background-image url
  var url = getComputedStyle(this.DOM.el).backgroundImage.match(
    /url\(["']?([^"']*)["']?\)/
  )[1];
  gsap.set(this.DOM.el, { backgroundImage: "none" });

  var iterations = 3;
  var innerHTML = "";
  for (var i = 0; i < iterations; ++i) {
    innerHTML +=
      '<div class="double__img" style="background-image:url(' +
      url +
      ')"></div>';
  }
  this.DOM.el.innerHTML = innerHTML;

  this.DOM.bottom = this.DOM.el.querySelector(".double__img:first-child");
  this.DOM.middle = this.DOM.el.querySelector(".double__img:nth-child(2)");
  this.DOM.top = this.DOM.el.querySelector(".double__img:last-child");

  gsap.set(this.DOM.bottom, {
    scale: 1.3
  });
  gsap.set(this.DOM.middle, {
    scaleX: -1.15,
    scaleY: 1.15
  });
};

Fx8.prototype.mouseenter = function () {
  if (this.leaveTimeout) {
    this.leaveTimeout.kill();
  }

  var DURATION = 0.6;
  this.enterTimeout = gsap
    .timeline({
      defaults: {
        duration: DURATION / 2,
        ease: "power1"
      }
    })
    .addLabel("start", 0)
    .set([this.DOM.middle, this.DOM.bottom], { willChange: "filter" })
    .set([this.DOM.middle, this.DOM.top], { willChange: "clip-path" })
    .fromTo(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      },
      "start"
    )
    .fromTo(
      this.DOM.middle,
      {
        filter: "brightness(600%) saturate(200%)"
      },
      {
        filter: "brightness(100%) saturate(100%)"
      },
      "start"
    )
    .fromTo(
      this.DOM.middle,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      },
      "start+=" + DURATION / 2
    )
    .fromTo(
      this.DOM.bottom,
      {
        filter: "brightness(600%) saturate(200%)"
      },
      {
        filter: "brightness(100%) saturate(100%)"
      },
      "start+=" + DURATION / 2
    );
};

Fx8.prototype.mouseleave = function () {
  if (this.enterTimeout) {
    this.enterTimeout.kill();
  }

  var DURATION = 0.6;
  this.leaveTimeout = gsap
    .timeline({
      defaults: {
        duration: DURATION / 2,
        ease: "power1"
      }
    })
    .addLabel("start", 0)
    .set([this.DOM.middle, this.DOM.bottom], { willChange: "filter" })
    .set([this.DOM.middle, this.DOM.top], { willChange: "clip-path" })
    .to(
      this.DOM.bottom,
      {
        filter: "brightness(150%) saturate(150%)"
      },
      "start"
    )
    .to(
      this.DOM.middle,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      "start"
    )
    .to(
      this.DOM.middle,
      {
        filter: "brightness(150%) saturate(150%)"
      },
      "start+=" + DURATION / 2
    )
    .to(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      "start+=" + DURATION / 2
    );
};

// Fx9

function Fx9(DOM_el) {
  this.DOM = {
    el: null,
    bottom: null,
    top: null
  };
  this.DOM.el = DOM_el;
  this.layout();
}

Fx9.prototype.layout = function () {
  var url = getComputedStyle(this.DOM.el).backgroundImage.match(
    /url\(["']?([^"']*)["']?\)/
  )[1];
  gsap.set(this.DOM.el, { backgroundImage: "none" });

  var iterations = 2;
  var innerHTML = "";
  for (var i = 0; i < iterations; ++i) {
    innerHTML +=
      '<div class="double__img" style="background-image:url(' +
      url +
      ')"></div>';
  }
  this.DOM.el.innerHTML = innerHTML;

  this.DOM.bottom = this.DOM.el.querySelector(".double__img:first-child");
  this.DOM.top = this.DOM.el.querySelector(".double__img:last-child");
};

Fx9.prototype.mouseenter = function () {
  if (this.leaveTimeout) {
    this.leaveTimeout.kill();
  }

  this.enterTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.8,
        ease: "power4"
      }
    })
    .set(this.DOM.bottom, { transformOrigin: "50% 50%" })
    .set(this.DOM.top, { willChange: "clip-path" })
    .fromTo(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(100% 0%, 100% 0%, 0% 100%, 0% 100%)"
      },
      0
    )

    .fromTo(
      this.DOM.bottom,
      {
        skewX: 15,
        scale: 2,
        filter: "brightness(600%)"
      },
      {
        skewX: 0,
        scale: 1,
        filter: "brightness(100%)",
        scale: 1.1
      },
      0
    );
};

Fx9.prototype.mouseleave = function () {
  if (this.enterTimeout) {
    this.enterTimeout.kill();
  }

  this.leaveTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.8,
        ease: "power4"
      }
    })
    .set(this.DOM.top, { willChange: "clip-path" })
    .to(
      this.DOM.top,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      },
      0
    )

    .to(
      this.DOM.bottom,
      {
        filter: "brightness(600%)",
        skewX: 15,
        scale: 2,
        onComplete: function () {
          gsap.set(this.DOM.bottom, {
            filter: "brightness(0%)"
          });
        }
      },
      0
    );
};

function Fx10(DOM_el) {
  this.DOM = {
    el: null,
    bottom: null,
    top: null
  };
  this.DOM.el = DOM_el;
  this.layout();
}

Fx10.prototype.layout = function () {
  var url = getComputedStyle(this.DOM.el).backgroundImage.match(
    /url\(["']?([^"']*)["']?\)/
  )[1];
  gsap.set(this.DOM.el, { backgroundImage: "none" });

  var iterations = 5;
  var innerHTML = "";
  for (var i = 0; i < iterations; ++i) {
    innerHTML +=
      '<div class="double__img" style="background-image:url(' +
      url +
      ')"></div>';
  }
  this.DOM.el.innerHTML = innerHTML;
  this.DOM.images = Array.prototype.slice.call(
    this.DOM.el.querySelectorAll(".double__img")
  );

  gsap.set(this.DOM.images[0], {
    scale: 1.3,
    filter: "saturate(200%)"
  });
};

Fx10.prototype.mouseenter = function () {
  if (this.leaveTimeout) {
    this.leaveTimeout.kill();
  }

  this.enterTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.5,
        ease: "power3"
      }
    })
    .set(this.DOM.images, { willChange: "clip-path" })
    .fromTo(
      this.DOM.images[1],
      {
        clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)"
      },
      {
        duration: 1,
        ease: "expo",
        clipPath: "polygon(100% 50%, 100% 50%, 100% 100%, 100% 100%)"
      },
      0.6
    )
    .fromTo(
      this.DOM.images[2],
      {
        clipPath: "polygon(0% 50%, 50% 50%, 50% 100%, 0% 100%)"
      },
      {
        clipPath: "polygon(0% 100%, 50% 100%, 50% 100%, 0% 100%)"
      },
      0.4
    )
    .fromTo(
      this.DOM.images[3],
      {
        clipPath: "polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)"
      },
      {
        clipPath: "polygon(50% 50%, 100% 50%, 100% 50%, 50% 50%)"
      },
      0
    )
    .fromTo(
      this.DOM.images[4],
      {
        clipPath: "polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)"
      },
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 50%, 0% 50%)"
      },
      0.2
    );
};

Fx10.prototype.mouseleave = function () {
  if (this.enterTimeout) {
    this.enterTimeout.kill();
  }

  this.leaveTimeout = gsap
    .timeline({
      defaults: {
        duration: 0.4,
        ease: "power3"
      }
    })
    .set(this.DOM.images, { willChange: "clip-path" })
    .to(
      this.DOM.images[1],
      {
        clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)"
      },
      0
    )
    .to(
      this.DOM.images[2],
      {
        clipPath: "polygon(0% 50%, 50% 50%, 50% 100%, 0% 100%)"
      },
      0.2
    )
    .to(
      this.DOM.images[3],
      {
        clipPath: "polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)"
      },
      0.6
    )
    .to(
      this.DOM.images[4],
      {
        clipPath: "polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)"
      },
      0.4
    );
};

DoubleImageEffect.prototype.initEvents = function () {
  var self = this;
  this.DOM.el.addEventListener("mouseenter", function () {
    self.effect.mouseenter();
  });

  this.DOM.el.addEventListener("mouseleave", function () {
    self.effect.mouseleave();
  });
};

[...document.querySelectorAll(".double")].forEach(
  (el) => new DoubleImageEffect(el)
);

// new DoubleImageEffect(document.querySelectorAll(".double")[0]);