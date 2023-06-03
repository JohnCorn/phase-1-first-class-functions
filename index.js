function receivesAFunction(spy)
{
    spy();
}

function spy()
{
    console.log("works!");
}

function returnsANamedFunction()
{
    return receivesAFunction;
}

function returnsAnAnonymousFunction()
{
    return function () {console.log("works!");}
}