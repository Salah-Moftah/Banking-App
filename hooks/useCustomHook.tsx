import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

export const useAcounts = async ({id, page}: {id?: string | string[] | undefined, page?: string | string[] | undefined}) => {

  const loggedIn = await getLoggedInUser();
  
  const currentPage = Number(page as string) || 1;

  const accounts = await getAccounts({ userId: loggedIn.$id });

  const accountsData = accounts?.data;

  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  
  const account = await getAccount({ appwriteItemId });

  return { currentPage, account, accounts, loggedIn, accountsData, appwriteItemId };
}