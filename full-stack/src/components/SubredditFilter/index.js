// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Component for subreddit filter
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Container Imports ----------------------------------------------------------
import SubredditFilterLink from '../../containers/SubredditFilterLink';
// ----------------------------------------------------------------------------

// Action Import --------------------------------------------------------------
import { SubredditVisibilityFilters } from '../../actions';
// ----------------------------------------------------------------------------

// Footer Component -----------------------------------------------------------
const SubredditFilter = () => (
  <div>
    <SubredditFilterLink filter = {
      SubredditVisibilityFilters.SHOW_ALL_SUBREDDITS }>
      All
    </SubredditFilterLink>
    <SubredditFilterLink filter = {
      SubredditVisibilityFilters.SHOW_VIEWING }>
      Viewing
    </SubredditFilterLink>
    <SubredditFilterLink filter = {
      SubredditVisibilityFilters.SHOW_HIDING }>
      Hiding
    </SubredditFilterLink>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default SubredditFilter
// ----------------------------------------------------------------------------
