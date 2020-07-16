const Meta = require('../Util/Meta');

class PartyMemberMeta extends Meta {
  constructor(member, meta) {
    super();

    Object.defineProperty(this, 'Member', { value: member });

    const defaultCharacters = [
      'CID_556_Athena_Commando_F_RebirthDefaultA',
      'CID_557_Athena_Commando_F_RebirthDefaultB',
      'CID_558_Athena_Commando_F_RebirthDefaultC',
      'CID_559_Athena_Commando_F_RebirthDefaultD',
      'CID_560_Athena_Commando_M_RebirthDefaultA',
      'CID_561_Athena_Commando_M_RebirthDefaultB',
      'CID_562_Athena_Commando_M_RebirthDefaultC',
      'CID_563_Athena_Commando_M_RebirthDefaultD',
    ];
    const defCharacter = defaultCharacters[Math.floor(Math.random() * defaultCharacters.length)];

    this.schema = {
      'Default:Location_s': 'PreLobby',
      'Default:CampaignHero_j': JSON.stringify({
        CampaignHero: {
          heroItemInstanceId: '',
          heroType: `FortHeroType'/Game/Athena/Heroes/${defCharacter}.${defCharacter}'`,
        },
      }),
      'Default:MatchmakingLevel_U': '0',
      'Default:ZoneInstanceId_s': '',
      'Default:HomeBaseVersion_U': '1',
      'Default:HasPreloadedAthena_b': false,
      'Default:FrontendEmote_j': JSON.stringify({
        FrontendEmote: {
          emoteItemDef: 'None',
          emoteItemDefEncryptionKey: '',
          emoteSection: -1,
        },
      }),
      'Default:NumAthenaPlayersLeft_U': '0',
      'Default:UtcTimeStartedMatchAthena_s': '0001-01-01T00:00:00.000Z',
      'Default:GameReadiness_s': 'NotReady',
      'Default:HiddenMatchmakingDelayMax_U': '0',
      'Default:ReadyInputType_s': 'Count',
      'Default:CurrentInputType_s': 'MouseAndKeyboard',
      'Default:AssistedChallengeInfo_j': JSON.stringify({
        AssistedChallengeInfo: {
          questItemDef: 'None',
          objectivesCompleted: 0,
        },
      }),
      'Default:MemberSquadAssignmentRequest_j': JSON.stringify({
        MemberSquadAssignmentRequest: {
          startingAbsoluteIdx: -1,
          targetAbsoluteIdx: -1,
          swapTargetMemberId: 'INVALID',
          version: 0,
        },
      }),
      'Default:AthenaCosmeticLoadout_j': JSON.stringify({
        AthenaCosmeticLoadout: {
          characterDef: `AthenaCharacterItemDefinition'/Game/Athena/Items/Cosmetics/Characters/${defCharacter}.${defCharacter}'`,
          characterEKey: '',
          backpackDef: 'None',
          backpackEKey: '',
          pickaxeDef: 'AthenaPickaxeItemDefinition\'/Game/Athena/Items/Cosmetics/Pickaxes/DefaultPickaxe.DefaultPickaxe\'',
          pickaxeEKey: '',
          variants: [],
        },
      }),
      'Default:AthenaBannerInfo_j': JSON.stringify({
        AthenaBannerInfo: {
          bannerIconId: 'standardbanner15',
          bannerColorId: 'defaultcolor15',
          seasonLevel: 1,
        },
      }),
      'Default:BattlePassInfo_j': JSON.stringify({
        BattlePassInfo: {
          bHasPurchasedPass: false,
          passLevel: 1,
          selfBoostXp: 0,
          friendBoostXp: 0,
        },
      }),
      'Default:Platform_j': JSON.stringify({
        Platform: {
          platformStr: this.Member.Client.config.platform.short,
        },
      }),
      'Default:PlatformUniqueId_s': 'INVALID',
      'Default:PlatformSessionId_s': '',
      'Default:CrossplayPreference_s': 'OptedIn',
      'Default:VoiceChatEnabled_b': 'true',
      'Default:VoiceConnectionId_s': '',
    };

    if (meta) this.update(meta, true);
  }
}

module.exports = PartyMemberMeta;
