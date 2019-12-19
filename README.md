# IrisFisher1

Firstly you should have Python version 2.7 and Yarn installed 

Features

Installed apps :


	backports.csv==1.0.7
	certifi==2019.6.16
	cmsplugin-filer==0.10.2
	dateparser==0.7.0
	decorator==4.4.0
	defusedxml==0.6.0
	diff-match-patch==20181111
	dj-database-url==0.3.0
	Django==1.11.26
	django-appconf==1.0.1
	django-bower==5.2.0
	django-braces==1.9.0
	django-classy-tags==0.6.2
	django-cms==3.1.2
	django-compressor==1.5
	django-constance==1.2.1
	django-cors-headers==3.0.2
	django-countries==3.3
	django-crequest==2016.3.16
	django-debug-panel==0.8.1
	django-debug-toolbar==1.3.2
	django-filer==0.9.12
	django-impersonate==0.9.2
	django-import-export==0.5.1
	django-mathfilters==0.4.0
	django-mptt==0.7.4
	django-multiselectfield==0.1.4
	django-picklefield==0.3.2
	django-polymorphic==0.7.1
	django-recaptcha==1.3.0
	django-reversion==1.8.5
	django-sass-processor==0.5.4
	django-sekizai==0.8.2
	Django-Select2==4.3.1
	django-smuggler==0.6.0
	django-treebeard==3.0
	django-user-agents==0.3.2
	django-uuslug==1.1.8
	django-webpack-loader==0.6.0
	django-widget-tweaks==1.4.3
	django-wkhtmltopdf==3.1.0
	djangocms-admin-style==0.2.7
	djangocms-column==1.5
	djangocms-file==0.1
	djangocms-flash==0.2.0
	djangocms-googlemap==0.3
	djangocms-inherit==0.1
	djangocms-installer==0.7.9
	djangocms-link==1.6.2
	djangocms-picture==0.1
	djangocms-snippet==1.5
	djangocms-style==1.5
	djangocms-teaser==0.1
	djangocms-text-ckeditor==2.6.0
	djangocms-video==0.1
	djangorestframework==3.9.4
	dropbox==6.8.0
	easy-thumbnails==2.2
	enum34==1.1.6
	et-xmlfile==1.0.1
	feedparser==5.2.1
	googlemaps==2.2
	html5lib==0.999999
	jdcal==1.4.1
	jsonfield==1.0.3
	libsass==0.12.3
	lockfile==0.12.2
	mailjet-rest==1.2.2
	mangopaysdk==2.0
	Markdown==2.1.0
	MySQL-python==1.2.5
	numpy==1.16.5
	oauthlib==3.0.1
	odfpy==1.4.0
	openpyxl==2.6.2
	pandas==0.24.2
	pdfkit==0.5.0
	Pillow==2.9.0
	pipenv==2018.11.26
	plivo==0.11.3
	python-dateutil==2.5.3
	python-decouple==3.1
	python-slugify==3.0.2
	pytz==2015.4
	PyYAML==3.12
	regex==2019.4.14
	requests==2.7.0
	requests-oauthlib==1.2.0
	six==1.9.0
	sqlparse==0.2.0
	suds==0.4
	tablib==0.13.0
	text-unidecode==1.2
	tqdm==4.14.0
	typing==3.6.6
	tzlocal==1.2
	ua-parser==0.7.3
	Unidecode==0.4.18
	urllib3==1.25.2
	user-agents==1.1.0
	uWSGI==2.0.17.1
	validators==0.12.0
	virtualenv==16.7.8
	virtualenv-clone==0.5.3
	wkhtmltopdf==0.2
	xlrd==1.2.0
	XlsxWriter==0.9.3
	xlwt==1.3.0
	xmltodict==0.10.2





Requirements :

	requirements.txt

Configured Settings :

	Base : backend/iris_api/iris_api/settings.py
 
 

Setup a local development environment :
 

Clone prject from :
	https://github.com/{{account_id}}/IrisFisher1.git

Create virtual environment :

   	$ cd IrisFisher1
	$ cd backend
   	$ sudo -H pip install -U pipenv 

Install Django :  

	$ pipenv install django 

Activate virtual environment :

   	$ pipenv shell


Install requirements :

   	$ pipenv install -r requirements.txt


Run migrations and create superuser for djangocms :

   	$ cd iris_api/
	$ python manage.py makemigrations
	$ python manage.py migrate
	

Launch the project :

	$ python manage.py runserver


Launch the page that cosume the API :

	$ cd frontend/
	$ yarn 
	$ yarn start 


Signup page : http://localhost:8000/users/signup/
Login page : http://localhost:8000/users/login/





 
