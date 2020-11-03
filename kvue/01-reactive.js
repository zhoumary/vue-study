// 传入对象obj，给他定义一个属性key，它的初始值是val
// 该属性未来的访问会被拦截，这样就实现了响应式
function defineReactive(obj, key, val) {
  // 向下递归遍历
  observe(val);

  Object.defineProperty(obj, key, {
    get() {
      console.log("get", key);
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        console.log("set", key);
        observe(newVal)
        val = newVal;
        // update()
      }
    },
  });
}

// 自动设置一个对象的所有属性为响应式的
function observe(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
}

// Vue.set/delete
// 属性动态新增和删除
function set(obj, key, val) {
  defineReactive(obj, key, val)
}


const obj = {
  foo: "foo",
  bar: "bar",
  baz: { a: 1 },
  arr: [1,2,3]
};
// defineReactive(obj, 'foo', 'foo')
observe(obj);
// obj.foo;
// obj.foo = "foooooooooo";
// obj.bar;
// obj.bar = "barrrrrrrr";
// obj.baz = { a: 10 };
// obj.baz.a

set(obj, 'dong', 'dong')
obj.dong

// 数组响应式
// 思考题：7个mutation方法：push、pop。。。