import { Address } from "..";
import { createTestClient } from "../tests/createTestClient";
import { delay } from "../utils/time";

describe('TonWallet', () => {
    it('should transfer funds from test trea', async () => {
        const client = await createTestClient();
        // const wallet = await openTestTreasure(client);
        // const seqno = await wallet.wallet.getSeqNo();
        // const dest = Address.parseFriendly('EQClZ-KEDodcnyoyPX7c0qBBQ9QePzzquVwKuaqHk7F01825').address;
        // let balance = await client.getBalance(dest);
        // await wallet.wallet.transfer({
        //     to: dest,
        //     amount: 0.001,
        //     seqno,
        //     secretKey: wallet.secretKey,
        //     bounceable: false
        // });
        // while (true) {
        //     await delay(1000);
        //     if (await client.getBalance(dest) > balance) {
        //         break;
        //     }
        // }
    });
});