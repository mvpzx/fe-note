---
title: "slots 魔法"
index: 7
---

# slots 魔法

在 Python 中，我们在定义类的时候可以定义属性和方法。当我们创建了一个类的实例后，我们还可以给该实例绑定任意新的属性和方法。

```python
class A(object):
    def __init__(self, name):
        self.name = name


a = A('a')
print(a.__dict__)  # {'name': 'a'}

a.age = 20
print(a.__dict__)  # {'age': 20, 'name': 'a'}
```

在上面，我们创建了实例 p 之后，给它绑定了一个新的属性 z，这种动态绑定的功能虽然很有用，但它的代价是消耗了更多的内存。

因此，为了不浪费内存，可以使用 `__slots__` 来告诉 Python 只给一个固定集合的属性分配空间，对上面的代码做一点改进，如下：

```python
class A(object):
    __slots__ = ('name', 'y')

    def __init__(self, name):
        self.name = name


a = A('a')
a.age = 20         # AttributeError: 'A' object has no attribute 'age'
```

使用 `__slots__` 有一点需要注意的是，`__slots__` 设置的属性仅对当前类有效，对继承的子类不起效，除非子类也定义了 `__slots__`，这样，子类允许定义的属性就是自身的 slots 加上父类的 slots。

## 总结

- slots 魔法：限定允许绑定的属性.
- `__slots__` 设置的属性仅对当前类有效，对继承的子类不起效，除非子类也定义了 slots，这样，子类允许定义的属性就是自身的 slots 加上父类的 slots。
