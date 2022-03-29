/**
 * Enum Type
 *
 * JSコンパイル時に定数として自動変換してくれる
 *
 * 役割などを定数として保持したい
 * → 定数が被らないようにしないといけないため、constで管理するのは大変
 * → enum型で管理
 */

// 大変
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

{
  enum Role {
    ADMIN, // 0
    READ_ONLY, // 1
    AUTHOR, // 2
  }

  const person = {
    name: 'John',
    age: 40,
    hobbies: ['soccer', 'tennis'],
    role: Role.ADMIN,
  };

  if (person.role === Role.ADMIN) {
    console.log('ADMIN user is.');
  }

  /**
   * 定数の値を指定することも可能
   *
   * デフォルト値は0
   */
  enum Role2 {
    ADMIN = 100,
    READ_ONLY, // 101
    AUTHOR, // 102
  }

  /**
   * stringも許容
   *
   * この場合は、全てに定数を指定する
   */
  enum Role3 {
    ADMIN = '管理者',
    READ_ONLY = '読み取り',
    AUTHOR = '著者',
  }
}
