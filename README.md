Type 1 : Excecution step for TypeScript file (create separate JavaScript file)
-------------------------------------------------------------------------------
1. npx tsc <file-name.ts> => creates after compilation <file-name.js> file
2. node <file-name.js>

Type 2 : Excecution step for TypeScript file (without creation of separate JavaScript file)
--------------------------------------------------------------------------------------------
npx ts-node <file-name.ts>


------------------------------------------------------------------------------------------------
Note: npx is used because the TypeScript is installed locally for the particular project folder
------------------------------------------------------------------------------------------------


* Encapsulation : Hard Private Fields (#field) vs TypeScript private
--------------------------------------------------------------------------------------------------
TypeScript offers two ways to make fields private:

1.TypeScript private modifier: Enforced only at compile time. Once compiled to JavaScript, the property becomes public in the emitted code.

2.ES2022 Private Fields (# prefix): Enforced at runtime by JavaScript itself. The field cannot be accessed outside the class under any circumstances, even at runtime.