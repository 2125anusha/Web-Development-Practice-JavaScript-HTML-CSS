
has_license =true;
has_insurance=false;
has_experience=true;

let can_drive_car = (has_license && has_insurance) || (has_license && has_experience);
let can_drive_motorcycle = (has_license && has_insurance && has_experience);
let cannot_drive_any = !has_license || (!has_insurance && !has_experience);

console.log("Can drive car:", can_drive_car);
console.log("Can drive motorcycle:", can_drive_motorcycle);
console.log("Cannot drive any:", cannot_drive_any);