// Add color codes for console output
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const CYAN = '\x1b[36m';
const YELLOW = '\x1b[33m';
const GREEN = '\x1b[32m';
const MAGENTA = '\x1b[35m';
const BLUE = '\x1b[34m';

console.log(`${BOLD}${CYAN}SOLID Principles in JavaScript (SOLID is an acronym for five design principles intended to make software designs more understandable, flexible, and maintainable):${RESET}`);

// 1. Single Responsibility Principle (SRP)
console.log(`\n${BOLD}${YELLOW}1. Single Responsibility Principle (SRP):${RESET}`);
console.log(`${GREEN}A class should have only one reason to change, meaning it should have only one job or responsibility.${RESET}`);
require('./SingleResponsibility');

// 2. Open/Closed Principle (OCP)
console.log(`\n${BOLD}${YELLOW}2. Open/Closed Principle (OCP):${RESET}`);
console.log(`${GREEN}Software entities should be open for extension, but closed for modification. You should be able to add new functionality without changing existing code.${RESET}`);
require('./OpenClosed');

// 3. Liskov Substitution Principle (LSP)
console.log(`\n${BOLD}${YELLOW}3. Liskov Substitution Principle (LSP):${RESET}`);
console.log(`${GREEN}Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.${RESET}`);
require('./LiskovSubstitution');

// 4. Interface Segregation Principle (ISP)
console.log(`\n${BOLD}${YELLOW}4. Interface Segregation Principle (ISP):${RESET}`);
console.log(`${GREEN}Clients should not be forced to depend on interfaces they do not use. Split large interfaces into smaller, more specific ones.${RESET}`);
require('./InterfaceSegragation');

// 5. Dependency Inversion Principle (DIP)
console.log(`\n${BOLD}${YELLOW}5. Dependency Inversion Principle (DIP):${RESET}`);
console.log(`${GREEN}High-level modules should not depend on low-level modules. Both should depend on abstractions.${RESET}`);
require('./DependencyInversion');