declare option output:method 'json';
declare variable $testdir external;

declare function local:attr2el($el as element()) as element()* {
	for $a in $el/@*
		let $name := name($a)
		let $value := 
			if(starts-with($a, "file:")) then
				file:resolve-path($a)
			else
				$a/string()
		return element {$name} {$value}
};

declare function local:to-json($tests as element(testsuite)*) as element(json)
{
<json arrays="json testcases fail error skip" 
	  numbers="test errors failures skipped tests" 
	  objects="e s f testsuite testcase">
{
	for $t in $tests
		return
		<testsuite>
			{ local:attr2el($t) }
			<testcases>
			{
				for $c in $t/*
				return
				<testcase>
					{ local:attr2el($c) }
					<fail>
					{
						for $f in $c/failure
							return <f>{ local:attr2el($f) }</f>
					}
					</fail>
					<error>
					{
						for $e in $c/error
							return <e>{ local:attr2el($e) }</e>
					}
					</error>
					<skip>
					{
						for $s in $c/skipped
							return <s>{ local:attr2el($s) }</s>
					}
					</skip>
				</testcase>
			}
			</testcases>
		</testsuite>
}
</json>
	
};

let $tests := 
	for $t in file:list($testdir, true(), '*.xqm')[matches(., '[\.\-_]test\.xqm')]
		return file:path-to-uri($testdir ||'/'||$t)
let $results := unit:test-uris($tests)
let $json := local:to-json($results/testsuite)
return $json
