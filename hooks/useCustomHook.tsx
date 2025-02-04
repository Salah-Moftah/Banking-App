import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

export const useAcounts = async ({
  id,
  page,
}: {
  id?: string | string[] | undefined;
  page?: string | string[] | undefined;
}) => {
  console.log("useAccounts function was called.");

  const loggedIn = await getLoggedInUser();

  if (!loggedIn || !loggedIn.$id) {
    throw new Error("User is not logged in or invalid user data.");
  }

  const currentPage = Number(page as string) || 1;

  const accounts = await getAccounts({ userId: loggedIn.$id });

  if (!accounts || !accounts.data || accounts.data.length === 0) {
    throw new Error("No accounts data available for the logged-in user.");
  }

  const accountsData = accounts.data;

  const appwriteItemId =
    (id as string) ||
    (accountsData && accountsData.length > 0 ? accountsData[0]?.appwriteItemId : undefined);

  if (!appwriteItemId) {
    throw new Error("appwriteItemId is undefined. Please provide a valid ID or ensure accountsData is not empty.");
  }
  
  const account = await getAccount({ appwriteItemId });

  if (!account) {
    throw new Error("No account data found for the given appwriteItemId.");
  }
  
  return {
    currentPage,
    account,
    accounts,
    loggedIn,
    accountsData,
    appwriteItemId,
  };
};
