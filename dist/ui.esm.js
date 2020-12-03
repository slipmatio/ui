import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, withScopeId, createCommentVNode, renderSlot, Fragment } from 'vue';

var script = /*#__PURE__*/defineComponent({
  name: 'UiSample',

  // vue component name
  data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },

  computed: {
    changedBy() {
      var _message$amount;

      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message === null || message === void 0 ? void 0 : message.action} ${(_message$amount = message.amount) !== null && _message$amount !== void 0 ? _message$amount : ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

const _withId = /*#__PURE__*/withScopeId("data-v-8445b280");

pushScopeId("data-v-8445b280");

const _hoisted_1 = {
  class: "ui-sample"
};

const _hoisted_2 = /*#__PURE__*/createTextVNode(".");

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("p", null, [createTextVNode("The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1
  /* TEXT */
  ), createVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2]), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.increment(...args))
  }, " Click +1 "), createVNode("button", {
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.decrement(...args))
  }, " Click -1 "), createVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => _ctx.increment(5))
  }, " Click +5 "), createVNode("button", {
    onClick: _cache[4] || (_cache[4] = $event => _ctx.decrement(5))
  }, " Click -5 "), createVNode("button", {
    onClick: _cache[5] || (_cache[5] = (...args) => _ctx.reset(...args))
  }, " Reset ")]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".ui-sample[data-v-8445b280] {\n  display: block;\n  width: 400px;\n  margin: 25px auto;\n  border: 1px solid #ccc;\n  background: #eaeaea;\n  text-align: center;\n  padding: 25px;\n}\n\n.ui-sample p[data-v-8445b280] {\n  margin: 0 0 1em;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-8445b280";

var script$1 = /*#__PURE__*/defineComponent({
  props: {
    icon: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      isPrimary: false,
      isSecondary: false,
      buttonType: 'button'
    };
  },

  created() {
    if (this.$attrs.primary !== undefined) {
      this.isPrimary = true;
    } else if (this.$attrs.secondary !== undefined) {
      this.isSecondary = true;
    }

    if (this.$attrs.submit !== undefined) {
      this.buttonType = 'submit';
    }
  }

});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", null, "DEMO");
}

script$1.render = render$1;

var script$2 = /*#__PURE__*/defineComponent({
  props: {
    icon: {
      type: String,
      required: false
    },
    isWorking: {
      type: Boolean,
      required: false
    },
    workingText: {
      type: String,
      required: false
    }
  },

  data() {
    return {
      isPrimary: false,
      isSecondary: false,
      buttonType: 'button'
    };
  },

  created() {
    if (this.$attrs.primary !== undefined) {
      this.isPrimary = true;
    } else if (this.$attrs.secondary !== undefined) {
      this.isSecondary = true;
    }

    if (this.$attrs.submit !== undefined) {
      this.buttonType = 'submit';
    }
  }

});

const _hoisted_1$1 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  class: "w-4 h-4 mr-1 -ml-1 animate-spin"
};

const _hoisted_2$1 = /*#__PURE__*/createVNode("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1);

const _hoisted_3 = /*#__PURE__*/createVNode("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1);

const _hoisted_4 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "w-4 h-4 mr-1 -ml-1"
};

const _hoisted_5 = /*#__PURE__*/createVNode("path", {
  "fill-rule": "evenodd",
  d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1);

const _hoisted_6 = {
  key: 2,
  class: "w-4 h-4 mr-1 -ml-1",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

const _hoisted_7 = /*#__PURE__*/createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
}, null, -1);

const _hoisted_8 = {
  key: 3,
  class: "w-4 h-4 mr-1 -ml-1",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

const _hoisted_9 = /*#__PURE__*/createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
}, null, -1);

const _hoisted_10 = /*#__PURE__*/createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
}, null, -1);

const _hoisted_11 = {
  key: 4,
  class: "w-4 h-4 mr-1 -ml-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};

const _hoisted_12 = /*#__PURE__*/createVNode("path", {
  "fill-rule": "evenodd",
  d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1);

const _hoisted_13 = {
  key: 5,
  class: "w-4 h-4 mr-1 -ml-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};

const _hoisted_14 = /*#__PURE__*/createVNode("path", {
  "fill-rule": "evenodd",
  d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1);

const _hoisted_15 = {
  key: 6,
  class: "w-4 h-4 mr-1 -ml-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};

const _hoisted_16 = /*#__PURE__*/createVNode("path", {
  "fill-rule": "evenodd",
  d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
  "clip-rule": "evenodd"
}, null, -1);

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", {
    type: _ctx.buttonType,
    class: ["btn", {
      primary: _ctx.isPrimary,
      secondary: _ctx.isSecondary
    }]
  }, [_ctx.isWorking ? (openBlock(), createBlock("svg", _hoisted_1$1, [_hoisted_2$1, _hoisted_3])) : createCommentVNode("", true), _ctx.icon === 'trash' && !_ctx.isWorking ? (openBlock(), createBlock("svg", _hoisted_4, [_hoisted_5])) : createCommentVNode("", true), _ctx.icon === 'new' && !_ctx.isWorking ? (openBlock(), createBlock("svg", _hoisted_6, [_hoisted_7])) : createCommentVNode("", true), _ctx.icon === 'edit' && !_ctx.isWorking ? (openBlock(), createBlock("svg", _hoisted_8, [_hoisted_9, _hoisted_10])) : createCommentVNode("", true), _ctx.icon === 'download' && !_ctx.isWorking ? (openBlock(), createBlock("svg", _hoisted_11, [_hoisted_12])) : createCommentVNode("", true), _ctx.icon === 'upload' && !_ctx.isWorking ? (openBlock(), createBlock("svg", _hoisted_13, [_hoisted_14])) : createCommentVNode("", true), _ctx.icon === 'reset' && !_ctx.isWorking ? (openBlock(), createBlock("svg", _hoisted_15, [_hoisted_16])) : createCommentVNode("", true), !_ctx.isWorking ? renderSlot(_ctx.$slots, "default", {
    key: 7
  }) : createCommentVNode("", true), _ctx.isWorking ? (openBlock(), createBlock(Fragment, {
    key: 8
  }, [createTextVNode(toDisplayString(_ctx.workingText), 1
  /* TEXT */
  )], 64
  /* STABLE_FRAGMENT */
  )) : createCommentVNode("", true)], 10, ["type"]);
}

var css_248z$1 = ".btn {\n  --tw-border-opacity: 1;\n  border-color: rgba(209, 213, 219, var(--tw-border-opacity));\n  border-radius: 0.375rem;\n  border-width: 1px;\n  display: inline-flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.btn:disabled {\n  opacity: 0.5;\n}\n\n.btn {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.btn.primary {\n  --tw-bg-opacity: 1;\n  background-color: rgba(201, 0, 0, var(--tw-bg-opacity));\n}\n\n.btn.primary:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(223, 0, 0, var(--tw-bg-opacity));\n}\n\n.btn.primary:active {\n  --tw-bg-opacity: 1;\n  background-color: rgba(223, 0, 0, var(--tw-bg-opacity));\n}\n\n.btn.primary:focus {\n  --tw-border-opacity: 1;\n  border-color: rgba(233, 77, 77, var(--tw-border-opacity));\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgba(242, 153, 153, var(--tw-ring-opacity));\n  --tw-ring-opacity: 0.5;\n}\n\n.btn.primary {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.btn.primary:hover {\n  --tw-text-opacity: 1;\n  color: rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\n.btn.secondary {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.btn.secondary:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));\n}\n\n.btn.secondary:active {\n  --tw-bg-opacity: 1;\n  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));\n}\n\n.btn.secondary:focus {\n  --tw-border-opacity: 1;\n  border-color: rgba(242, 153, 153, var(--tw-border-opacity));\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgba(59, 130, 246, var(--tw-ring-opacity));\n}\n\n.btn.secondary {\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.btn.secondary svg {\n  --tw-text-opacity: 1;\n  color: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n";
styleInject(css_248z$1);

script$2.render = render$2;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  UiSample: script,
  DemoButton: script$1,
  SlipmatButton: script$2
});

// Import vue components

const install = function installUi(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$1 as DemoButton, script$2 as SlipmatButton, script as UiSample };
