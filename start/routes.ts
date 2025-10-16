/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.on('/about').render('pages/about')
router.on('/services').render('pages/services')
router.on('/home').render('pages/home')
router.on('/contact').render('pages/contact')