angular.module("MyApp").run(["$templateCache", function($templateCache) {$templateCache.put("views/add.html","<div class=\"container\">\r\n	<div class=\"panel panel-default\">\r\n		<div class=\"panel-heading\">Add TV Show</div>\r\n		<div class=\"panel-body\">\r\n			<form class=\"form-inline\" method=\"post\" ng-submit=\"addShow()\" name=\"addForm\">\r\n				<div class=\"form-group\" ng-class=\"{ \'has-success\' : addForm.showName.$valid && addForm.showName.$dirty, \'has-error\' : addForm.showName.$invalid && addForm.showName.$dirty }\">\r\n					<input type=\"text\" class=\"form-control\" name=\"showName\" ng-model=\"showName\" placeholder=\"Enter TV show name\" required autofocus>\r\n					<div class=\"help-block text-danger\" ng-if=\"addForm.showName.$dirty\" ng-messages=\"addForm.showName.$error\">\r\n						<div ng-message=\"required\">TV show name is required</div>\r\n					</div>\r\n				</div>\r\n				<button class=\"btn btn-primary\" type=\"submit\" ng-disabled=\"addForm.$invalid\">Add show</button>\r\n			</form>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("views/detail.html","<div class=\"container\">\r\n	<div class=\"panel panel-default\">\r\n		<div class=\"panel-body\">\r\n			<div class=\"media\">\r\n				<div class=\"pull-left\">\r\n					<img src=\"\" alt=\"\" class=\"media-object img-rounded\" ng-src=\"{{show.poster}}\">\r\n					<div class=\"text-center\" ng-if=\"currentUser\">\r\n						<div ng-show=\"!isSubscribed()\">\r\n							<button class=\"btn btn-success\" ng-click=\"subscribe()\"><span class=\"glyphicon glyphicon-plus\"></span>Subscribe</button>\r\n						</div>\r\n						<div ng-show=\"isSubscribed()\">\r\n							<button class=\"btn btn-danger btn-block\" ng-click=\"unsubscribe()\"><span class=\"glyphicon glyphicon-minus\"></span>Unsubscribe</button>\r\n						</div>\r\n					</div>\r\n					<div class=\"text-center\" ng-show=\"!currentUser\">\r\n						<a href=\"#/login\" class=\"btn btn-block btn-primary\">Login to Subscribe</a>\r\n					</div>\r\n				</div>\r\n				<div class=\"media-body\">\r\n					<h2 class=\"media-heading\">\r\n					{{show.name}}\r\n					<span class=\"pull-right text-danger\">{{show.rating}}</span>\r\n					</h2>\r\n					<h4 ng-show=\"show.status === \'Continuing\'\">\r\n					<span class=\"glyphicon glyphicon-calendar text-danger\"></span>\r\n					{{show.airsDayOfWeek}} <em>{{show.airsTime}}</em> on {{show.network}}\r\n					</h4>\r\n					<h4 ng-show=\"show.status === \'Ended\'\">\r\n					Status: <span class=\"text-danger\">Ended</span>\r\n					</h4>\r\n					<p>{{show.overview}}</p>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class=\"alert alert-info\" ng-show=\"nextEpisode\">\r\n		The next episode starts {{nextEpisode.firstAired | fromNow}}.\r\n	</div>\r\n	\r\n	<div class=\"panel panel-default\">\r\n		<div class=\"panel-heading\">\r\n			<span class=\"glyphicon glyphicon-play\"></span>Episodes\r\n		</div>\r\n		<div class=\"panel-body\">\r\n			<div class=\"episode\" ng-repeat=\"episode in show.episodes\">\r\n				<h4>{{episode.episodeName}}\r\n				<small>Season {{episode.season}}, Episode {{episode.episodeNumber}} </small>\r\n				</h4>\r\n				<p>\r\n				<span class=\"glyphicon glyphicon-calendar\"></span>\r\n				{{episode.firstAired | date: \'short\'}}\r\n				</p>\r\n				<p>{{episode.overview}}</p>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("views/home.html","<div class=\"jumbotron\">\r\n	<div class=\"container\">\r\n		<ul class=\"alphabet\">\r\n			<li ng-repeat=\"char in alphabet\">\r\n				<span ng-click=\"filterByAlphabet(char)\">{{char}}</span>\r\n			</li>\r\n		</ul>\r\n		<ul class=\"genres\">\r\n			<li ng-repeat=\"genre in genres\">\r\n				<span ng-click=\"filterByGenre(genre)\">{{genre}}</span>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n</div>\r\n\r\n<div class=\"containter\">\r\n	<div class=\"panel panel-default\">\r\n		<div class=\"panel-heading\">{{headingTitle}}\r\n			<div class=\"pull-right\">\r\n				<input type=\"text\" class=\"search\" ng-model=\"query.name\" placeholder=\"Search...\">\r\n			</div>\r\n		</div>\r\n		<div class=\"panel-body\">\r\n			<div class=\"row show-list\">\r\n				<div class=\"col-xs-4 col-md-3\" ng-repeat=\"show in shows | filter:query | orderBy:\'rating\':true\">\r\n					<a href=\"/shows/{{show._id}}\">\r\n						<img ng-src=\"{{show.poster}}\" alt=\"show-poster\" class=\"img-rounded\" width=\"100%\" />\r\n					</a>\r\n					<div class=\"text-center\">\r\n						<a href=\"/shows/{{show._id}}\">{{show.name}}</a>\r\n						<p class=\"text-muted\">Episodes: {{show.episodes.length}}</p>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("views/login.html","<div class=\"container\">\r\n	<div class=\"row\">\r\n		<div class=\"panel center-form\">\r\n			<div class=\"panel-body\">\r\n				<h2 class=\"text-center\">Login</h2>\r\n				<form method=\"post\" ng-submit=\"login()\" name=\"loginForm\">\r\n					<div class=\"form-goup\">\r\n						<input class=\"form-control input-lg\" type=\"text\" name=\"email\" ng-model=\"email\" placeholder=\"Email\" required autofocus>\r\n					</div>\r\n					<div class=\"form-group\">\r\n						<input class=\"form-control input-lg\" type=\"password\" name=\"password\" ng-model=\"password\" placeholder=\"Password\" required>\r\n					</div>\r\n					<button type=\"submit\" ng-disabled=\"loginForm.$invalid\" class=\"btn btn-lg btn-block btn-success\">Sign In</button>\r\n				</form>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>	");
$templateCache.put("views/signup.html","<div class=\"containter\">\r\n	<br>\r\n	<div class=\"row\">\r\n		<div class=\"center-from panel\">\r\n			<form method=\"post\" ng-submit=\"signup()\" name=\"signupForm\">\r\n				<div class=\"panel-body\">\r\n					<h2 class=\"text-center\">Sign Up</h2>\r\n					<div class=\"form-group\" ng-class=\"{ \'has-success\' : signupForm.email.$valid && signupForm.email.$dirty, \'has-error\' : signupForm.email.$invalid && signupForm.email.$dirty}\">\r\n						<input type=\"email\" class=\"form-control input-lg\" id=\"email\" name=\"email\" ng-model=\"email\" placeholder=\"Email\" required autofocus>\r\n						<div class=\"help-block text-danger\" ng-if=\"signupForm.$dirty\" ng-messages=\"signupForm.email.$error\">\r\n							<div ng-message=\"required\"> Your email address is required.</div>\r\n							<div ng-message=\"email\">Your email address is invalid.</div>\r\n						</div>\r\n					</div>\r\n					<div class=\"form-group\" ng-class=\"{ \'has-success\' : signupForm.password.$valid && signupForm.password.$dirty, \'has-error\' : signupForm.password.$invalid && signupForm.password.$dirty}\">\r\n						<input type=\"password\" class=\"form-control input-lg\" name=\"password\" ng-model=\"password\" placeholder=\"Password\" required>\r\n						<div class=\"help-block text-danger\" ng-if=\"signupForm.password.$dirty\" ng-messages=\"signupForm.password.$error\">\r\n							<div ng-message=\"required\">Password is required</div>\r\n						</div>\r\n					</div>\r\n					<div class=\"form-group\" ng-class=\"{\'has-success\' : signupForm.confirmPassword.$valid && signupForm.confirmPassword.$dirty, \'has-error\' : signupForm.confirmPassword.$invalid && signupForm.confirmPassword.$dirty}\">\r\n						<input type=\"password\" class=\"form-control input-lg\" name=\"confirmPassword\" ng-model=\"confirmPassword\" repeat-password=\"password\" placeholder=\"Confirm Password\" required>\r\n						<div class=\"help-block text-danger my-special-animation\" ng-if=\"signupForm.confirmPassword.$dirty\" ng-messages=\"signupForm.confirmPassword.$error\">\r\n							<div ng-message=\"required\">You must confirm your password.</div>\r\n							<div ng-message=\"repeat\">Passwords do not match.</div>\r\n						</div>\r\n					</div>\r\n					<button class=\"btn btn-lg btn-block btn primary\" type=\"submit\" ng-disabled=\"signupForm.$invalid\">Create Account</button>\r\n				</div>\r\n			</form>\r\n		</div>\r\n	</div>\r\n</div>");}]);