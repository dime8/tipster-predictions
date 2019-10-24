import * as Sentry from '@sentry/browser'

export function trackError(error, extra) {
  Sentry.captureException(error)

  if (extra) {
    Sentry.configureScope(scope => {
      scope.setExtra('details', extra)
    })
  }
}

export function logAndTrackError(error, extra) {
  console.error(`${error.name}: ${error.message}`, {
    error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
    extra
  })
  trackError(error, extra)
}

export function setUserContext(user) {
  Sentry.configureScope(scope => {
    scope.setUser(user)
  })
}

export function captureBreadCrumb({ message, category, data }) {
  Sentry.addBreadcrumb({
    message,
    category,
    data
  })
}

export function logAndCaptureBreadCrumb({ message, category, data }) {
  console.log(message)
  captureBreadCrumb({
    message,
    category,
    data
  })
}
