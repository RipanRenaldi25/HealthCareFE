import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name) => {
  name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

export const mapMemberPayload = (familyData) => ({
  fullName: familyData.profile.fullName,
  birthDate: new Date(familyData.selfBirthDate),
  education: familyData.profile.education.toUpperCase(),
  relation: familyData.profile.relation,
  gender: familyData.profile.gender,
  ...(familyData.profile.phoneNumber && {
    phoneNumber: familyData.profile.phoneNumber,
  }),
  residence: {
    status: familyData.residence.status,
    address: familyData.residence.address,
    description: familyData.residence.description,
  },
  job: {
    jobTypeId: familyData.job.jobTypeId,
    income: familyData.job.income,
  },
  ...(!!familyData.institutionId && {
    institutionId: familyData.institutionId,
  }),
  nutrition: {
    height: familyData.nutrition.height,
    weight: familyData.nutrition.weight,
    birth_weight: familyData.nutrition.birth_weight,
  },
  ...(familyData.classId && {
    classId: familyData.classId,
  }),
  schoolYear: familyData.schoolYear,
  semester: familyData.semester,
  nis: familyData.nis,
});

export const formatBirthDate = (date) => {
  if (!date) {
    return "-";
  }
  return new Date(date).toISOString().split("T")[0];
};

export const getDateDifference = (dateInput) => {
  const date = +new Date(dateInput);
  const diff = +new Date() - date;

  const seconds = Math.floor(diff / 1000);

  const minutes = 60;
  const hours = 60 * minutes;
  const days = 24 * hours;
  const weeks = 7 * days;
  const months = 30 * days;
  const years = 12 * months;

  if (seconds < minutes) {
    return `${seconds} seconds ago`;
  } else if (seconds < hours) {
    const minute = Math.floor(seconds / minutes);
    return `${minute} minutes ago`;
  } else if (seconds < days) {
    const hour = Math.floor(seconds / hours);
    return `${hour} hours ago`;
  } else if (seconds < months) {
    const day = Math.floor(seconds / days);
    return `${day} days ago`;
  } else if (seconds < years) {
    const month = Math.floor(seconds / months);
    return `${month} months ago`;
  }
  const year = Math.floor(seconds / years);
  return `${year} years ago`;
};

export const getDate = (date) => {
  const dateFormat = Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    year: "numeric",
    month: "2-digit",
  });
  return dateFormat.format(new Date(date));
};

// export const getCurrentDate = () => {
//   const dateFormat = Intl.DateTimeFormat("id-ID", {
//     day: "2-digit",
//     year: "numeric",
//     month: "2-digit",
//   });
//   const currentDate = new Date();
//   const formatedDate = dateFormat.format(currentDate);
//   return formatedDate.split("/").reverse().join("/").toString();
// };

export const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
