export default function ({ $auth, error }) {
  // If the user is not admin
  if (!$auth.user.is_staff) {
    return error('You don`t have permissions for this page.')
  }
}
