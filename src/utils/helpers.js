
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}


export function formatTime(timeString) {
  const [hour, minute] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hour));
  date.setMinutes(parseInt(minute));
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}


export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export function shortenName(fullName) {
  const names = fullName.split(' ');
  if (names.length >= 2) {
    return `${names[0]} ${names[1][0]}.`;
  }
  return fullName;
}


export function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}


export function generateId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
