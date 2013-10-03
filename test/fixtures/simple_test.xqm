module namespace test = 'test.simple';

declare %unit:test function test:pass() as empty-sequence()
{
	unit:assert(true(), 'Passes')
};

declare %unit:test function test:fail() as empty-sequence()
{
	unit:assert(false(), 'Fails')
};
