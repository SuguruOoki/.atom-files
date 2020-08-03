'use babel';

const {shell} = require('electron');
import { CompositeDisposable } from 'atom';

export default {

	subscriptions: null,

	activate(state) {
		this.subscriptions = new CompositeDisposable();

		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:artisan': () => this.openUrl('https://laravel.com/docs/artisan')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:authentication': () => this.openUrl('https://laravel.com/docs/authentication')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:authorization': () => this.openUrl('https://laravel.com/docs/authorization')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:billing': () => this.openUrl('https://laravel.com/docs/billing')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:blade': () => this.openUrl('https://laravel.com/docs/blade')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:broadcasting': () => this.openUrl('https://laravel.com/docs/broadcasting')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:cache': () => this.openUrl('https://laravel.com/docs/cache')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:collections': () => this.openUrl('https://laravel.com/docs/collections')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:configuration': () => this.openUrl('https://laravel.com/docs/configuration')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:container': () => this.openUrl('https://laravel.com/docs/container')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:contracts': () => this.openUrl('https://laravel.com/docs/contracts')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:contributions': () => this.openUrl('https://laravel.com/docs/contributions')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:controllers': () => this.openUrl('https://laravel.com/docs/controllers')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:csrf': () => this.openUrl('https://laravel.com/docs/csrf')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:database': () => this.openUrl('https://laravel.com/docs/database')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:database-testing': () => this.openUrl('https://laravel.com/docs/database-testing')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:deployment': () => this.openUrl('https://laravel.com/docs/deployment')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:dusk': () => this.openUrl('https://laravel.com/docs/dusk')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:eloquent': () => this.openUrl('https://laravel.com/docs/eloquent')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:eloquent-collections': () => this.openUrl('https://laravel.com/docs/eloquent-collections')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:eloquent-mutators': () => this.openUrl('https://laravel.com/docs/eloquent-mutators')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:eloquent-relationships': () => this.openUrl('https://laravel.com/docs/eloquent-relationships')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:eloquent-resources': () => this.openUrl('https://laravel.com/docs/eloquent-resources')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:eloquent-serialization': () => this.openUrl('https://laravel.com/docs/eloquent-serialization')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:encryption': () => this.openUrl('https://laravel.com/docs/encryption')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:envoy': () => this.openUrl('https://laravel.com/docs/envoy')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:errors': () => this.openUrl('https://laravel.com/docs/errors')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:events': () => this.openUrl('https://laravel.com/docs/events')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:facades': () => this.openUrl('https://laravel.com/docs/facades')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:filesystem': () => this.openUrl('https://laravel.com/docs/filesystem')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:frontend': () => this.openUrl('https://laravel.com/docs/frontend')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:hashing': () => this.openUrl('https://laravel.com/docs/hashing')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:helpers': () => this.openUrl('https://laravel.com/docs/helpers')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:homestead': () => this.openUrl('https://laravel.com/docs/homestead')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:horizon': () => this.openUrl('https://laravel.com/docs/horizon')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:http-tests': () => this.openUrl('https://laravel.com/docs/http-tests')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:installation': () => this.openUrl('https://laravel.com/docs/installation')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:lifecycle': () => this.openUrl('https://laravel.com/docs/lifecycle')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:localization': () => this.openUrl('https://laravel.com/docs/localization')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:mail': () => this.openUrl('https://laravel.com/docs/mail')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:middleware': () => this.openUrl('https://laravel.com/docs/middleware')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:migrations': () => this.openUrl('https://laravel.com/docs/migrations')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:mix': () => this.openUrl('https://laravel.com/docs/mix')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:mocking': () => this.openUrl('https://laravel.com/docs/mocking')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:notifications': () => this.openUrl('https://laravel.com/docs/notifications')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:packages': () => this.openUrl('https://laravel.com/docs/packages')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:pagination': () => this.openUrl('https://laravel.com/docs/pagination')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:passport': () => this.openUrl('https://laravel.com/docs/passport')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:passwords': () => this.openUrl('https://laravel.com/docs/passwords')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:providers': () => this.openUrl('https://laravel.com/docs/providers')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:queries': () => this.openUrl('https://laravel.com/docs/queries')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:queues': () => this.openUrl('https://laravel.com/docs/queues')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:redis': () => this.openUrl('https://laravel.com/docs/redis')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:releases': () => this.openUrl('https://laravel.com/docs/releases')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:requests': () => this.openUrl('https://laravel.com/docs/requests')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:responses': () => this.openUrl('https://laravel.com/docs/responses')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:routing': () => this.openUrl('https://laravel.com/docs/routing')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:scheduling': () => this.openUrl('https://laravel.com/docs/scheduling')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:scout': () => this.openUrl('https://laravel.com/docs/scout')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:seeding': () => this.openUrl('https://laravel.com/docs/seeding')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:session': () => this.openUrl('https://laravel.com/docs/session')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:socialite': () => this.openUrl('https://laravel.com/docs/socialite')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:structure': () => this.openUrl('https://laravel.com/docs/structure')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:testing': () => this.openUrl('https://laravel.com/docs/testing')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:upgrade': () => this.openUrl('https://laravel.com/docs/upgrade')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:urls': () => this.openUrl('https://laravel.com/docs/urls')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:valet': () => this.openUrl('https://laravel.com/docs/valet')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:validation': () => this.openUrl('https://laravel.com/docs/validation')
		}));
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'laravel-docs:views': () => this.openUrl('https://laravel.com/docs/views')
		}));
	 },

	openUrl(url) { shell.openExternal(url); }
};
