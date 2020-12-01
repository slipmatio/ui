'use strict';var vue=require('vue');var script = /*#__PURE__*/vue.defineComponent({
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
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message?.action} ${message.amount ?? ''}`.trim();
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
});const _withId = /*#__PURE__*/vue.withScopeId("data-v-8445b280");

vue.pushScopeId("data-v-8445b280");

const _hoisted_1 = {
  class: "ui-sample"
};

const _hoisted_2 = /*#__PURE__*/vue.createTextVNode(".");

vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("p", null, [vue.createTextVNode("The counter was " + vue.toDisplayString(_ctx.changedBy) + " to ", 1
  /* TEXT */
  ), vue.createVNode("b", null, vue.toDisplayString(_ctx.counter), 1), _hoisted_2]), vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.increment(...args))
  }, " Click +1 "), vue.createVNode("button", {
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.decrement(...args))
  }, " Click -1 "), vue.createVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => _ctx.increment(5))
  }, " Click +5 "), vue.createVNode("button", {
    onClick: _cache[4] || (_cache[4] = $event => _ctx.decrement(5))
  }, " Click -5 "), vue.createVNode("button", {
    onClick: _cache[5] || (_cache[5] = (...args) => _ctx.reset(...args))
  }, " Reset ")]);
});function styleInject(css, ref) {
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
}var css_248z = "\n.ui-sample[data-v-8445b280] {\n  display: block;\n  width: 400px;\n  margin: 25px auto;\n  border: 1px solid #ccc;\n  background: #eaeaea;\n  text-align: center;\n  padding: 25px;\n}\n.ui-sample p[data-v-8445b280] {\n  margin: 0 0 1em;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-8445b280";var script$1 = /*#__PURE__*/vue.defineComponent({
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

});function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("button", null, "DEMO");
}script$1.render = render$1;/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,UiSample: script,DemoButton: script$1});// Import vue components

const install = function installUi(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components$1=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,UiSample: script,DemoButton: script$1});// iife/cjs usage extends esm default export - so import it all
// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components$1).forEach(([componentName, component]) => {
  if (componentName !== 'default') {
    const key = componentName;
    const val = component;
    install[key] = val;
  }
});module.exports=install;