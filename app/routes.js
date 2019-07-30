const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/user_team_search', function (req, res) {
  res.render('user_team_search')
})

router.post('/user_team_search', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let searchBy = req.session.data['user_or_team_search']

  if (searchBy === 'user_search') {
    res.redirect('/user_search')
  } else {
    res.redirect('/team_search')
  }
})

router.post('/unit_amend_or_create_selection', function (req, res) {
  let amendOrCreateUnit = req.session.data['unit_create_or_amend']

  if (amendOrCreateUnit === 'unit-create') {
    res.redirect('/unit_create')
  } else {
    res.redirect('/unit_search')
  }
})

router.post('/team_amend_or_create_selection', function (req, res) {
  let amendOrCreateTeam = req.session.data['team_create_or_amend']

  if (amendOrCreateTeam === 'team_create') {
    res.redirect('/team_create')
  } else {
    res.redirect('/team_search')
  }
})

router.post('/unit_inactive', function (req, res) {
  res.redirect('unit_inactive')
})

router.get('/user_search', function (req, res) {
  res.render('user_search')
})

router.get('/team_search', function (req, res) {
  res.render('team_search')
})

router.post('/team_create_permissions', function (req, res) {
  res.redirect('team_create_permissions')
})

router.get('/user', function (req, res) {
  res.render('user')
})

router.post('/team', function (req, res) {
  let addUsers = req.session.data['team_add_users']

  if (addUsers === 'yes') {
    res.redirect('/team_add_users')
  } else {
    res.redirect('/team_summary')
  }
})

router.post('/unit', function (req, res) {
  let addTeams = req.session.data['unit_add_teams']

  if (addTeams === 'yes') {
    res.redirect('/unit_add_teams')
  } else {
    res.redirect('/unit_summary')
  }
})

module.exports = router
