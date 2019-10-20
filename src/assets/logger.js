~function() {
	window.log = function(a) {
		console['log']('[ext] REBAR -> ' + a);
		window.rebar.logs = window.rebar.logs || [];
		window.rebar.logs.push(a, Date.now());
	};

	AHDHBADJHDAHJSHBASJBHSAJHBSJHB = function() {
		return true;
	};
};
