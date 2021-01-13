export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return descriptor.value.bind(this);
    },
  };
  return adjDescriptor;
}
