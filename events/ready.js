import { ActivityTypes } from '@biscuitland/api-types';

const readyE = (client, session) => {
  console.log('Ready! ' + client.user.username);

  const shardsValue = session.ws.agent.shards.values();
  for (const { id } of shardsValue) {
    session.editStatus(
      id,
      {
        activities: [
          {
            name: '🥠 queso',
            type: ActivityTypes.Watching,
            createdAt: Date.now(),
          },
        ],
        status: 'online',
      },
      true,
    );
  }
};

export { readyE };
