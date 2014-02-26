# sprout.js

> Responsive, equal height columns



### Options



**'responsive'**     

_Type: Boolean_

_Default: true_

Will the elements resize on window resize?



**'responsiveDelay'**     

_Type: Integer_

_Default: 50_

How long to wait untill triggering the effect on/during window resize (Longer time = less choppy screen).



**'bindTo'**

_Type: String_

_Default: null_

A space separated list of events to bind to.

```js
var foo = function() {
	$('.bar').on('click', function () {
		//...
		$.event.trigger({
			type: 'customEventName'
		});
	});
};


//...


$('.qux').sprout({
	'bindTo': 'customEventName'
});

```



**'childElement'**     

_Type: string_

_Default: null_
