// Literal types
let env: 'developer' | 'state' | 'production' = 'state';

function setEven(myenv: 'developer' | 'state' | 'production'):
'developer' | 'state' | 'production' {
    return myenv;
}

setEven('developer')

//Types 
type Env = 'developer' | 'state' | 'production' 
let env2: Env = 'state';

function setEven2(myenv: Env): Env {
    return myenv
}

setEven2('developer')

// Enums 
const enum Env3 {
    Developer = 'developer',
    State = 'state',
    Production = 'production' ,
}
let env3: Env3 = Env3.Production;

function setEven3(myenv: Env3): Env3 {
    return myenv;
}
setEven3(Env3.Developer)