// Web3Forms — https://web3forms.com (free, no account needed)
// Get a free access key by entering info@smtgayatridevi.edu.in at web3forms.com
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface SubmitSchoolFormOptions {
  formName: string;
  subject: string;
  replyTo?: string;
  fields: Record<string, string>;
}

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";

export async function submitSchoolForm({
  formName,
  subject,
  replyTo,
  fields,
}: SubmitSchoolFormOptions) {
  if (!ACCESS_KEY) {
    throw new Error(
      "Form service is not configured. Please contact the school directly.",
    );
  }

  const payload: Record<string, string> = {
    access_key: ACCESS_KEY,
    subject,
    from_name: "Smt Gayatri Devi School Website",
    ...fields,
    "Form Name": formName,
  };

  if (replyTo) {
    payload.replyto = replyTo;
    if (!payload.email) {
      payload.email = replyTo;
    }
  }

  let response: Response;
  try {
    response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    // Network error or request blocked (e.g. ad-blocker)
    throw new Error(
      "Your message could not be sent — a browser extension may be blocking the request. " +
        "Try disabling your ad-blocker for this page, or email us directly at info@smtgayatridevi.edu.in",
    );
  }

  let result: Web3FormsResponse = { success: false, message: "" };
  try {
    result = (await response.json()) as Web3FormsResponse;
  } catch {
    // keep defaults
  }

  if (!response.ok || !result.success) {
    throw new Error(
      result.message ||
        "We couldn't send your form right now. Please try again.",
    );
  }

  return result;
}
