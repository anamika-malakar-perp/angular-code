# angular-code

So Angular starts bootstrapping the application. As described above it first creates classes for each component. So it calls MyAppComponent constructor. When executing a component constructor Angular resolves all dependencies that are injected into MyAppComponent constructor and provides them as parameters. It also creates a DOM node which is the host element of the my-app component. Then it proceeds to creating a host element for the child-comp and calling ChildComponent constructor. At this stage Angular is not concerned with the i input binding and any lifecycle hooks.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-m5muqv)
